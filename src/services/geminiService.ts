import { GoogleGenAI } from '@google/genai';
import { MovieProject, TargetIndustry, ProductionType, CharacterProfile, ActorRecommendation, CharacterRelationship } from '../types';

const STORAGE_KEY = 'cineverse_gemini_api_key';

export function getGeminiApiKey(): string {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return saved.trim();
  }
  return (import.meta.env.VITE_GEMINI_API_KEY || '').trim();
}

export function setGeminiApiKey(key: string): void {
  if (typeof window !== 'undefined') {
    if (key.trim()) {
      localStorage.setItem(STORAGE_KEY, key.trim());
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }
}

export function isGeminiConfigured(): boolean {
  return Boolean(getGeminiApiKey());
}

/**
 * Creates GoogleGenAI client instance
 */
function getClient(): GoogleGenAI | null {
  const apiKey = getGeminiApiKey();
  if (!apiKey) return null;
  return new GoogleGenAI({ apiKey });
}

/**
 * Multi-Agent Screenplay Analysis using Gemini
 */
export async function analyzeScreenplayWithGemini(params: {
  title: string;
  tagline: string;
  genre: string;
  language: string;
  targetIndustry: TargetIndustry;
  targetAudience: string;
  estimatedBudgetRange: string;
  productionType: ProductionType;
  scriptText: string;
}): Promise<Partial<MovieProject>> {
  const ai = getClient();
  if (!ai) {
    throw new Error('Gemini API key is not configured.');
  }

  const prompt = `You are CineVerse AI, an agentic multi-agent production planning system for filmmakers.
Analyze the following screenplay input for a production titled "${params.title}".
Target Industry: ${params.targetIndustry}
Genre: ${params.genre}
Language: ${params.language}
Budget Range: ${params.estimatedBudgetRange}
Production Type: ${params.productionType}

SCREENPLAY CONTENT / EXCERPT:
"""
${params.scriptText}
"""

Execute your 7-agent pipeline and return a complete JSON response strictly adhering to this schema.
CRITICAL MANDATORY INSTRUCTION FOR CASTING:
For EVERY character, you MUST provide an array of EXACTLY 5 distinct real-world actors (ranked 1, 2, 3, 4, 5) suitable for ${params.targetIndustry}. Never return fewer than 5 actors per character.

JSON SCHEMA:
{
  "storyAnalysis": {
    "logline": "A compelling 1-2 sentence logline capturing the core protagonist goal and central conflict.",
    "synopsis": "A rich 3-4 sentence narrative synopsis.",
    "genre": ["${params.genre}", "Subgenre1", "Subgenre2"],
    "themes": ["Theme 1", "Theme 2", "Theme 3"],
    "emotionalTone": "Atmospheric tone description",
    "pacing": "Pacing description across acts",
    "targetAudience": "${params.targetAudience}",
    "marketPotential": "Commercial and streaming potential analysis"
  },
  "characters": [
    {
      "id": "char-1",
      "name": "Actual Character Name from script",
      "role": "Protagonist",
      "ageRange": "28 - 42",
      "gender": "Male",
      "archetype": "Character Archetype",
      "personalityTraits": ["Trait 1", "Trait 2", "Trait 3"],
      "motivation": "Core emotional driver and objective",
      "castingRequirements": "Physical and dramatic requirements",
      "characterJourney": "Narrative transformation arc",
      "sceneCountEstimated": 45,
      "emotionalArcIntensity": "High",
      "recommendations": [
        {
          "id": "rec-1",
          "name": "Actor 1 (Real prominent actor from ${params.targetIndustry})",
          "wikiQueryName": "Exact Wikipedia article name",
          "rank": 1,
          "matchPercentage": 96,
          "rubric": {
            "actingStyleMatch": 25,
            "ageAppearance": 15,
            "genreExperience": 14,
            "emotionalRange": 15,
            "previousRoleSimilarity": 14,
            "screenPresence": 9,
            "marketFit": 5
          },
          "reasoning": "Detailed justification connecting actor's craft to this character.",
          "strengths": ["Strength 1", "Strength 2", "Strength 3"],
          "potentialChallenge": "Logistical or stylistic consideration",
          "industry": "${params.targetIndustry}",
          "experienceLevel": "Superstar / A-List",
          "budgetImpact": "Premium",
          "notablePastRoles": ["Role 1", "Role 2", "Role 3"]
        },
        {
          "id": "rec-2",
          "name": "Actor 2",
          "wikiQueryName": "Wikipedia name",
          "rank": 2,
          "matchPercentage": 93,
          "rubric": { "actingStyleMatch": 24, "ageAppearance": 15, "genreExperience": 14, "emotionalRange": 14, "previousRoleSimilarity": 13, "screenPresence": 8, "marketFit": 5 },
          "reasoning": "...",
          "strengths": ["..."],
          "potentialChallenge": "...",
          "industry": "${params.targetIndustry}",
          "experienceLevel": "Superstar / A-List",
          "budgetImpact": "Premium",
          "notablePastRoles": ["..."]
        },
        {
          "id": "rec-3",
          "name": "Actor 3",
          "wikiQueryName": "Wikipedia name",
          "rank": 3,
          "matchPercentage": 90,
          "rubric": { "actingStyleMatch": 23, "ageAppearance": 14, "genreExperience": 14, "emotionalRange": 14, "previousRoleSimilarity": 13, "screenPresence": 8, "marketFit": 4 },
          "reasoning": "...",
          "strengths": ["..."],
          "potentialChallenge": "...",
          "industry": "${params.targetIndustry}",
          "experienceLevel": "Established Lead",
          "budgetImpact": "Medium",
          "notablePastRoles": ["..."]
        },
        {
          "id": "rec-4",
          "name": "Actor 4",
          "wikiQueryName": "Wikipedia name",
          "rank": 4,
          "matchPercentage": 87,
          "rubric": { "actingStyleMatch": 22, "ageAppearance": 14, "genreExperience": 13, "emotionalRange": 14, "previousRoleSimilarity": 12, "screenPresence": 8, "marketFit": 4 },
          "reasoning": "...",
          "strengths": ["..."],
          "potentialChallenge": "...",
          "industry": "${params.targetIndustry}",
          "experienceLevel": "Established Lead",
          "budgetImpact": "Medium",
          "notablePastRoles": ["..."]
        },
        {
          "id": "rec-5",
          "name": "Actor 5",
          "wikiQueryName": "Wikipedia name",
          "rank": 5,
          "matchPercentage": 83,
          "rubric": { "actingStyleMatch": 21, "ageAppearance": 14, "genreExperience": 12, "emotionalRange: 13, "previousRoleSimilarity": 11, "screenPresence": 7, "marketFit": 3 },
          "reasoning": "...",
          "strengths": ["..."],
          "potentialChallenge": "...",
          "industry": "${params.targetIndustry}",
          "experienceLevel": "Mid-Career",
          "budgetImpact": "Low",
          "notablePastRoles": ["..."]
        }
      ]
    }
  ],
  "relationships": [
    {
      "id": "rel-1",
      "fromCharacterId": "char-1",
      "toCharacterId": "char-2",
      "relationType": "Rivalry / Ally / Mentor",
      "emotionalTension": "High",
      "arcSummary": "How their relationship evolves",
      "keyTurningPoint": "Pivotal dramatic shift scene"
    }
  ],
  "budget": {
    "totalEstimatedBudgetUsd": 8000000,
    "scaleBadge": "Medium",
    "complexityParagraph": "Departmental breakdown summary",
    "items": [
      {
        "category": "Cast & Key Talent Pool",
        "percentage": 34,
        "estimatedAmountUsd": 2720000,
        "scaleLevel": "High",
        "description": "Talent payroll and rehearsals",
        "costDrivers": ["Lead cast commitments", "Ensemble depth"]
      },
      {
        "category": "Location Scouting, Sets & Art Department",
        "percentage": 22,
        "estimatedAmountUsd": 1760000,
        "scaleLevel": "Medium",
        "description": "Soundstage builds and location permits",
        "costDrivers": ["Practical location fees", "Custom sets"]
      },
      {
        "category": "Cinematography, Lighting & Camera Package",
        "percentage": 16,
        "estimatedAmountUsd": 1280000,
        "scaleLevel": "Medium",
        "description": "Camera and lighting packages",
        "costDrivers": ["Lens packages", "Specialty rigs"]
      },
      {
        "category": "VFX, CGI & Virtual Production Extensions",
        "percentage": 14,
        "estimatedAmountUsd": 1120000,
        "scaleLevel": "Medium",
        "description": "Digital environment extensions and cleanup",
        "costDrivers": ["Complex simulation passes", "CGI environments"]
      },
      {
        "category": "Sound Design, Foley & Orchestral Score",
        "percentage": 8,
        "estimatedAmountUsd": 640000,
        "scaleLevel": "Medium",
        "description": "Bespoke soundscapes and original score",
        "costDrivers": ["Dolby Atmos spatial mixing", "Live orchestra"]
      },
      {
        "category": "Marketing, Teasers & Festival Run",
        "percentage": 6,
        "estimatedAmountUsd": 480000,
        "scaleLevel": "Low",
        "description": "Key art, teaser cuts, festival submissions",
        "costDrivers": ["Press campaigns", "Festival entries"]
      }
    ]
  },
  "locations": [
    {
      "id": "loc-1",
      "name": "Location Name extracted from script scenes",
      "type": "Indoor",
      "setting": "Setting description",
      "sceneCount": 12,
      "estimatedDays": 6,
      "permitComplexity": "Moderate",
      "notes": "Production requirements",
      "realWorldAlternatives": ["Alternative Location 1", "Alternative Location 2"]
    }
  ],
  "timeline": {
    "totalWeeks": 32,
    "complexityScore": 75,
    "complexityBadge": "Complex",
    "phases": [
      {
        "phase": "Pre-Production",
        "durationWeeks": 10,
        "keyMilestones": ["Screenplay Lock", "Lead Casting", "Location Tech Scouts"],
        "criticalRisks": ["Permit timelines"]
      },
      {
        "phase": "Principal Photography",
        "durationWeeks": 12,
        "keyMilestones": ["Block 1 Studio", "Block 2 Exterior Setpieces"],
        "criticalRisks": ["Weather and night shoots"]
      },
      {
        "phase": "Post-Production",
        "durationWeeks": 8,
        "keyMilestones": ["Editor Cut", "VFX Compositing", "Dolby Atmos Mix"],
        "criticalRisks": ["VFX turnaround"]
      },
      {
        "phase": "Festival & Distribution",
        "durationWeeks": 2,
        "keyMilestones": ["Festival premiere", "Theatrical / OTT release"],
        "criticalRisks": ["Release window competition"]
      }
    ],
    "highCostFlags": [
      {
        "sceneDescription": "Key climactic sequence or night exterior",
        "reason": "VFX Heavy / Night Shoots",
        "costImpact": "High",
        "mitigationSuggestion": "Schedule across consecutive nights with pre-lit arrays"
      }
    ]
  },
  "aiInsights": [
    "Insight 1 on screenplay structure",
    "Insight 2 on character dynamics",
    "Insight 3 on casting alignment",
    "Insight 4 on budget optimization",
    "Insight 5 on production risk mitigation"
  ]
}

Return ONLY valid JSON (no markdown backticks, no explanatory text).`;

  const modelsToTry = ['gemini-3.6-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
  let lastError: any = null;

  for (const model of modelsToTry) {
    try {
      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          temperature: 0.4,
        },
      });

      const text = response.text || '{}';
      const cleanJson = text.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim();
      const parsed = JSON.parse(cleanJson);
      if (parsed && (parsed.characters || parsed.storyAnalysis)) {
        return parsed;
      }
    } catch (err) {
      lastError = err;
      console.warn(`[GeminiService] Model ${model} generation attempt failed:`, err);
    }
  }

  throw lastError || new Error('Failed to generate screenplay analysis with Gemini models.');
}

/**
 * Grounded conversational assistant using Gemini
 */
export async function askGeminiAssistant(
  project: MovieProject,
  history: { sender: 'user' | 'assistant'; text: string }[],
  userPrompt: string
): Promise<{ text: string; citations?: string[] }> {
  const ai = getClient();
  if (!ai) {
    throw new Error('Gemini API key is not configured.');
  }

  const systemInstruction = `You are CineVerse Assistant, an expert AI production planning assistant embedded inside the CineVerse AI platform.
You are strictly grounded in the current movie project:
TITLE: ${project.title}
TAGLINE: ${project.tagline}
GENRE: ${project.genre}
INDUSTRY: ${project.targetIndustry}
ESTIMATED BUDGET: $${(project.budget.totalEstimatedBudgetUsd / 1000000).toFixed(1)}M USD (${project.budget.scaleBadge} Scale)
TIMELINE: ${project.timeline.totalWeeks} Weeks (Complexity: ${project.timeline.complexityScore}/100)

CHARACTERS & TOP CASTING:
${project.characters.map(c => `• ${c.name} (${c.role}, Age ${c.ageRange}): Motivation="${c.motivation}". Top Rec: ${c.recommendations.map(r => `${r.name} (#${r.rank} - ${r.matchPercentage}% match)`).join(', ')}`).join('\n')}

BUDGET ALLOCATIONS:
${project.budget.items.map(b => `• ${b.category}: ${b.percentage}% ($${(b.estimatedAmountUsd / 1000).toLocaleString()}k USD)`).join('\n')}

HIGH-COST RISK FLAGS:
${project.timeline.highCostFlags.map(f => `• ${f.sceneDescription} (${f.reason} - ${f.costImpact} Risk)`).join('\n')}

LOCATIONS:
${project.locations.map(l => `• ${l.name} (${l.type}) - ${l.sceneCount} scenes, ${l.estimatedDays} days`).join('\n')}

GUIDELINES:
- Always answer with confidence, professional filmmaker terminology, and grounded facts from this project.
- When asked why an actor was recommended, reference the 7-part rubric (Acting Style 25%, Age 15%, Genre 15%, Emotional Range 15%, Roles 15%, Screen Presence 10%, Market Fit 5%).
- When asked about costs, reference specific categories and mitigation strategies.
- Keep answers formatted in clean markdown.`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: userPrompt,
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.5,
    }
  });

  return {
    text: response.text || 'I analyzed your query across the current screenplay dataset.',
    citations: [`Project Dossier: ${project.title}`, `CineVerse Multi-Agent Engine`]
  };
}

/**
 * "What If" simulation using Gemini
 */
export async function simulateWhatIfWithGemini(
  project: MovieProject,
  query: string
): Promise<{
  query: string;
  summary: string;
  budgetImpact: string;
  castingImpact: string;
  timelineImpact: string;
  locationsImpact: string;
  verdict: string;
}> {
  const ai = getClient();
  if (!ai) {
    throw new Error('Gemini API key is not configured.');
  }

  const prompt = `You are CineVerse AI's Director Sandbox Simulator.
The director has proposed a "What If" scenario for the project "${project.title}" (${project.targetIndustry}, ${project.genre}, Budget: $${(project.budget.totalEstimatedBudgetUsd / 1000000).toFixed(1)}M USD, Timeline: ${project.timeline.totalWeeks} Weeks).

DIRECTOR HYPOTHESIS:
"${query}"

Simulate the ripple effects across:
1. summary (2-3 sentences overview of how the change alters creative and production dynamics)
2. budgetImpact (exact estimated percentage and dollar shifts)
3. castingImpact (how actor tiers, styles, or schedules shift)
4. timelineImpact (schedule adjustments in weeks for pre-production, shooting, post)
5. locationsImpact (set, location permits, or studio volume changes)
6. verdict (a concise executive recommendation from CineVerse AI)

Return ONLY valid JSON matching this format:
{
  "query": "${query.replace(/"/g, '\\"')}",
  "summary": "...",
  "budgetImpact": "...",
  "castingImpact": "...",
  "timelineImpact": "...",
  "locationsImpact": "...",
  "verdict": "..."
}`;

  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      temperature: 0.4,
    }
  });

  const text = response.text || '{}';
  const cleanJson = text.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim();
  return JSON.parse(cleanJson);
}
