import { neon } from '@neondatabase/serverless';
import bcrypt from 'bcryptjs';
import { UserProfile, MovieProject } from '../types';

const STORAGE_KEY = 'cineverse_neon_database_url';

export function getNeonDatabaseUrl(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved.trim();
  }
  return (import.meta.env.VITE_NEON_DATABASE_URL || '').trim();
}

export function setNeonDatabaseUrl(url: string): void {
  if (typeof window !== 'undefined') {
    if (url.trim()) {
      localStorage.setItem(STORAGE_KEY, url.trim());
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

export function isNeonConfigured(): boolean {
  return Boolean(getNeonDatabaseUrl());
}

/**
 * Creates Neon SQL executor client
 */
function getSqlExecutor() {
  const dbUrl = getNeonDatabaseUrl();
  if (!dbUrl) return null;
  return neon(dbUrl);
}

/**
 * Tests connection to Neon Serverless Postgres
 */
export async function testNeonConnection(): Promise<{
  success: boolean;
  version?: string;
  serverTime?: string;
  error?: string;
}> {
  try {
    const sql = getSqlExecutor();
    if (!sql) {
      return { success: false, error: 'Neon database URL is not configured.' };
    }

    const rows = await sql`SELECT version() AS version, NOW() AS server_time;`;
    if (rows && rows.length > 0) {
      return {
        success: true,
        version: rows[0].version as string,
        serverTime: rows[0].server_time as string,
      };
    }
    return { success: false, error: 'No response from database query.' };
  } catch (err: any) {
    console.error('[NeonService] Connection test failed:', err);
    return { success: false, error: err.message || 'Failed to connect to Neon Postgres.' };
  }
}

/**
 * Automatically initializes database tables in Neon Postgres
 */
export async function initNeonDatabaseSchema(): Promise<{ success: boolean; message: string }> {
  const sql = getSqlExecutor();
  if (!sql) {
    return { success: false, message: 'Neon Database URL not configured.' };
  }

  try {
    // 1. Create Users table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(64) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // 2. Create Projects table
    await sql`
      CREATE TABLE IF NOT EXISTS movie_projects (
        id VARCHAR(64) PRIMARY KEY,
        user_id VARCHAR(64) REFERENCES users(id) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        tagline TEXT,
        genre VARCHAR(128),
        language VARCHAR(128),
        target_industry VARCHAR(128),
        target_audience TEXT,
        budget_range VARCHAR(128),
        production_type VARCHAR(64),
        raw_screenplay_text TEXT,
        story_analysis JSONB,
        characters JSONB,
        relationships JSONB,
        budget_data JSONB,
        locations_data JSONB,
        timeline_data JSONB,
        ai_insights JSONB,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    return { success: true, message: 'Neon Postgres schema tables (users, movie_projects) created successfully.' };
  } catch (err: any) {
    console.error('[NeonService] Schema initialization failed:', err);
    return { success: false, message: err.message || 'Failed to run database schema migrations.' };
  }
}

/**
 * Register user in Neon Postgres with bcrypt password hashing
 */
export async function registerUserWithNeon(
  name: string,
  email: string,
  passwordPlain: string,
  role: UserProfile['role']
): Promise<UserProfile> {
  const sql = getSqlExecutor();
  if (!sql) {
    throw new Error('Neon database is not configured.');
  }

  // Ensure tables exist
  await initNeonDatabaseSchema();

  const userId = `usr_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(passwordPlain, salt);

  await sql`
    INSERT INTO users (id, name, email, password_hash, role, created_at, last_login)
    VALUES (${userId}, ${name}, ${email.toLowerCase().trim()}, ${passwordHash}, ${role}, NOW(), NOW())
    ON CONFLICT (email) DO UPDATE 
    SET name = ${name}, role = ${role}, password_hash = ${passwordHash}, last_login = NOW();
  `;

  return {
    id: userId,
    name,
    email: email.toLowerCase().trim(),
    role,
  };
}

/**
 * Login user verifying against Neon Postgres credentials
 */
export async function loginUserWithNeon(
  email: string,
  passwordPlain: string
): Promise<UserProfile> {
  const sql = getSqlExecutor();
  if (!sql) {
    throw new Error('Neon database is not configured.');
  }

  const rows = await sql`
    SELECT id, name, email, password_hash, role 
    FROM users 
    WHERE email = ${email.toLowerCase().trim()}
    LIMIT 1;
  `;

  if (!rows || rows.length === 0) {
    throw new Error('No user found with this email address in Neon DB.');
  }

  const userRow = rows[0];
  const isMatch = bcrypt.compareSync(passwordPlain, userRow.password_hash as string);

  if (!isMatch) {
    throw new Error('Invalid password for this account.');
  }

  // Update last login
  await sql`
    UPDATE users SET last_login = NOW() WHERE id = ${userRow.id};
  `;

  return {
    id: userRow.id as string,
    name: userRow.name as string,
    email: userRow.email as string,
    role: userRow.role as UserProfile['role'],
  };
}

/**
 * Save movie project into Neon Postgres
 */
export async function saveProjectToNeon(
  userId: string,
  project: MovieProject
): Promise<void> {
  const sql = getSqlExecutor();
  if (!sql) return;

  try {
    await initNeonDatabaseSchema();

    if (userId) {
      const emailFallback = `${userId.toLowerCase()}@cineverse.local`;
      await sql`
        INSERT INTO users (id, name, email, password_hash, role, created_at, last_login)
        VALUES (${userId}, 'Filmmaker', ${emailFallback}, 'demo_hash', 'Director', NOW(), NOW())
        ON CONFLICT (id) DO UPDATE SET last_login = NOW();
      `;
    }

    await sql`
      INSERT INTO movie_projects (
        id, user_id, title, tagline, genre, language, target_industry, target_audience,
        budget_range, production_type, raw_screenplay_text, story_analysis, characters,
        relationships, budget_data, locations_data, timeline_data, ai_insights, created_at, updated_at
      ) VALUES (
        ${project.id}, ${userId}, ${project.title}, ${project.tagline}, ${project.genre},
        ${project.language}, ${project.targetIndustry}, ${project.targetAudience},
        ${project.estimatedBudgetRange}, ${project.productionType}, ${project.rawScreenplayText || ''},
        ${JSON.stringify(project.storyAnalysis)}, ${JSON.stringify(project.characters)},
        ${JSON.stringify(project.relationships)}, ${JSON.stringify(project.budget)},
        ${JSON.stringify(project.locations)}, ${JSON.stringify(project.timeline)},
        ${JSON.stringify(project.aiInsights)}, NOW(), NOW()
      )
      ON CONFLICT (id) DO UPDATE SET
        title = ${project.title},
        tagline = ${project.tagline},
        genre = ${project.genre},
        language = ${project.language},
        target_industry = ${project.targetIndustry},
        target_audience = ${project.targetAudience},
        budget_range = ${project.estimatedBudgetRange},
        production_type = ${project.productionType},
        raw_screenplay_text = ${project.rawScreenplayText || ''},
        story_analysis = ${JSON.stringify(project.storyAnalysis)},
        characters = ${JSON.stringify(project.characters)},
        relationships = ${JSON.stringify(project.relationships)},
        budget_data = ${JSON.stringify(project.budget)},
        locations_data = ${JSON.stringify(project.locations)},
        timeline_data = ${JSON.stringify(project.timeline)},
        ai_insights = ${JSON.stringify(project.aiInsights)},
        updated_at = NOW();
    `;
    console.log('[NeonService] Successfully persisted project:', project.title, 'for user:', userId);
  } catch (err) {
    console.error('[NeonService] Failed to persist project to Neon DB:', err);
    throw err;
  }
}

/**
 * Load user projects from Neon Postgres
 */
export async function fetchUserProjectsFromNeon(userId: string): Promise<MovieProject[]> {
  const sql = getSqlExecutor();
  if (!sql) return [];

  try {
    const rows = await sql`
      SELECT * FROM movie_projects 
      WHERE user_id = ${userId}
      ORDER BY updated_at DESC;
    `;

    return rows.map((r: any) => ({
      id: r.id,
      title: r.title,
      tagline: r.tagline || '',
      genre: r.genre || '',
      language: r.language || '',
      targetIndustry: r.target_industry || 'Hollywood',
      targetAudience: r.target_audience || '',
      estimatedBudgetRange: r.budget_range || '',
      productionType: r.production_type || 'Feature Film',
      rawScreenplayText: r.raw_screenplay_text || '',
      storyAnalysis: typeof r.story_analysis === 'string' ? JSON.parse(r.story_analysis) : r.story_analysis,
      characters: typeof r.characters === 'string' ? JSON.parse(r.characters) : r.characters,
      relationships: typeof r.relationships === 'string' ? JSON.parse(r.relationships) : r.relationships,
      budget: typeof r.budget_data === 'string' ? JSON.parse(r.budget_data) : r.budget_data,
      locations: typeof r.locations_data === 'string' ? JSON.parse(r.locations_data) : r.locations_data,
      timeline: typeof r.timeline_data === 'string' ? JSON.parse(r.timeline_data) : r.timeline_data,
      aiInsights: typeof r.ai_insights === 'string' ? JSON.parse(r.ai_insights) : r.ai_insights,
      createdAt: r.created_at,
      updatedAt: r.updated_at,
    }));
  } catch (err) {
    console.warn('[NeonService] Failed to load projects from Neon DB:', err);
    return [];
  }
}

/**
 * Delete movie project from Neon Postgres
 */
export async function deleteProjectFromNeon(projectId: string): Promise<boolean> {
  const sql = getSqlExecutor();
  if (!sql) return false;

  try {
    await sql`
      DELETE FROM movie_projects 
      WHERE id = ${projectId};
    `;
    console.log('[NeonService] Deleted project:', projectId);
    return true;
  } catch (err) {
    console.error('[NeonService] Failed to delete project from Neon DB:', err);
    return false;
  }
}
