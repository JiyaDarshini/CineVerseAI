export type TargetIndustry = 
  | 'Hollywood'
  | 'Bollywood'
  | 'Tamil Cinema (Kollywood)'
  | 'Telugu Cinema (Tollywood)'
  | 'Malayalam Cinema (Mollywood)'
  | 'Kannada Cinema (Sandalwood)'
  | 'International Indie';

export type ProductionType = 'Feature Film' | 'Short Film' | 'Web Series' | 'Documentary' | 'Pilot Episode';

export type ExperienceLevel = 'All' | 'Emerging Talent' | 'Mid-Career' | 'Established Lead' | 'Superstar / A-List';
export type BudgetTier = 'All' | 'Indie / Low Budget' | 'Medium Budget' | 'Premium / Blockbuster';

export interface WeightedScoreRubric {
  actingStyleMatch: number; // 25%
  ageAppearance: number; // 15%
  genreExperience: number; // 15%
  emotionalRange: number; // 15%
  previousRoleSimilarity: number; // 15%
  screenPresence: number; // 10%
  marketFit: number; // 5%
}

export interface ActorRecommendation {
  id: string;
  name: string;
  wikiQueryName: string; // canonical Wikipedia page name
  rank: 1 | 2 | 3 | 4 | 5;
  matchPercentage: number;
  rubric: WeightedScoreRubric;
  reasoning: string;
  strengths: string[];
  potentialChallenge: string;
  industry: string;
  experienceLevel: 'Emerging Talent' | 'Mid-Career' | 'Established Lead' | 'Superstar / A-List';
  budgetImpact: 'Low' | 'Medium' | 'High' | 'Premium';
  notablePastRoles: string[];
  // Live fetched data (Wikipedia)
  wikiThumbnail?: string | null;
  wikiBio?: string | null;
  wikiUrl?: string;
  isLoadingWiki?: boolean;
}

export interface CharacterProfile {
  id: string;
  name: string;
  role: 'Protagonist' | 'Antagonist' | 'Deuteragonist' | 'Supporting Lead' | 'Mentor' | 'Key Catalyst';
  ageRange: string;
  gender: string;
  archetype: string;
  personalityTraits: string[];
  motivation: string;
  castingRequirements: string;
  characterJourney: string;
  sceneCountEstimated: number;
  emotionalArcIntensity: 'High' | 'Medium' | 'Subtle';
  recommendations: ActorRecommendation[];
}

export interface CharacterRelationship {
  id: string;
  fromCharacterId: string;
  toCharacterId: string;
  relationType: 'Love Interest / Romance' | 'Rivalry / Antagonism' | 'Father / Mentor' | 'Confidante / Ally' | 'Betrayal / Friction' | 'Familial Obligation';
  emotionalTension: 'High' | 'Medium' | 'Low';
  arcSummary: string;
  keyTurningPoint: string;
}

export interface BudgetItem {
  category: string;
  percentage: number;
  estimatedAmountUsd: number;
  scaleLevel: 'Low' | 'Medium' | 'High';
  description: string;
  costDrivers: string[];
}

export interface LocationScoutItem {
  id: string;
  name: string;
  type: 'Indoor' | 'Outdoor' | 'Special VFX / Studio' | 'Hybrid';
  setting: string; // e.g. "Rooftop Rain Sequence", "Neo-Tech Research Lab"
  sceneCount: number;
  estimatedDays: number;
  permitComplexity: 'Simple' | 'Moderate' | 'Permit Intensive / Restricted';
  notes: string;
  realWorldAlternatives: string[];
}

export interface TimelinePhase {
  phase: 'Pre-Production' | 'Principal Photography' | 'Post-Production' | 'Festival & Distribution';
  durationWeeks: number;
  keyMilestones: string[];
  criticalRisks: string[];
}

export interface HighCostFlag {
  sceneDescription: string;
  reason: 'VFX Heavy' | 'Night Shoots' | 'Crowd Sequence' | 'Permit/Location Expensive' | 'Complex Stunt';
  costImpact: 'Medium' | 'High' | 'Critical';
  mitigationSuggestion: string;
}

export interface StoryAnalysis {
  logline: string;
  synopsis: string;
  genre: string[];
  themes: string[];
  emotionalTone: string;
  pacing: string;
  targetAudience: string;
  marketPotential: string;
}

export interface MovieProject {
  id: string;
  title: string;
  tagline: string;
  genre: string;
  language: string;
  targetIndustry: TargetIndustry;
  targetAudience: string;
  estimatedBudgetRange: string;
  productionType: ProductionType;
  rawScreenplayText?: string;
  createdAt: string;
  updatedAt: string;
  
  storyAnalysis: StoryAnalysis;
  characters: CharacterProfile[];
  relationships: CharacterRelationship[];
  budget: {
    totalEstimatedBudgetUsd: number;
    scaleBadge: 'Low' | 'Medium' | 'High';
    complexityParagraph: string;
    items: BudgetItem[];
  };
  locations: LocationScoutItem[];
  timeline: {
    totalWeeks: number;
    complexityScore: number; // 0-100
    complexityBadge: 'Easy' | 'Moderate' | 'Complex' | 'Highly Complex';
    phases: TimelinePhase[];
    highCostFlags: HighCostFlag[];
  };
  aiInsights: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: 'Director' | 'Producer' | 'Screenwriter' | 'Production Manager' | 'Cinematographer' | 'Other';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  citations?: string[];
}
