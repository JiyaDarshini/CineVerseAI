import React, { useState } from 'react';
import { MovieProject, ActorRecommendation, CharacterProfile, ExperienceLevel, BudgetTier } from '../types';
import { WikiActorImage } from '../components/WikiActorImage';
import { ComparisonModal } from '../components/ComparisonModal';
import { WikiActorData } from '../services/wikiService';
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Filter,
  CheckSquare,
  Square,
  Award,
  Layers,
  Info,
  SlidersHorizontal,
  RefreshCw
} from 'lucide-react';

interface CastingStudioViewProps {
  project: MovieProject;
  initialCharacterId?: string;
}

export const CastingStudioView: React.FC<CastingStudioViewProps> = ({
  project,
  initialCharacterId,
}) => {
  const [selectedCharId, setSelectedCharId] = useState<string>(
    initialCharacterId || project.characters[0]?.id || ''
  );

  // Casting Alternative Mode Filters
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [expFilter, setExpFilter] = useState<ExperienceLevel>('All');
  const [budgetFilter, setBudgetFilter] = useState<BudgetTier>('All');
  const [showAlternativeMode, setShowAlternativeMode] = useState<boolean>(false);

  // Comparison State
  const [comparedActorIds, setComparedActorIds] = useState<string[]>([]);
  const [isComparisonOpen, setIsComparisonOpen] = useState<boolean>(false);

  // Live Wiki Data Cache in View State
  const [liveWikiData, setLiveWikiData] = useState<Record<string, WikiActorData>>({});

  const selectedChar =
    project.characters.find((c) => c.id === selectedCharId) ||
    project.characters[0];

  if (!selectedChar) {
    return (
      <div className="p-8 text-center text-[#96959c]">
        No character data available.
      </div>
    );
  }

  // Filter recommendations based on Casting Alternative Mode
  const filteredRecommendations = selectedChar.recommendations.filter((actor) => {
    if (industryFilter !== 'All' && !actor.industry.toLowerCase().includes(industryFilter.toLowerCase())) {
      return false;
    }
    if (expFilter !== 'All' && actor.experienceLevel !== expFilter) {
      return false;
    }
    if (budgetFilter !== 'All') {
      if (budgetFilter.includes('Indie') || budgetFilter.includes('Low')) {
        if (actor.budgetImpact !== 'Low') return false;
      } else if (budgetFilter.includes('Medium')) {
        if (actor.budgetImpact !== 'Medium' && actor.budgetImpact !== 'Low') return false;
      } else if (budgetFilter.includes('Premium')) {
        if (actor.budgetImpact !== 'Premium' && actor.budgetImpact !== 'High') return false;
      }
    }
    return true;
  });

  const handleToggleCompare = (actorId: string) => {
    setComparedActorIds((prev) =>
      prev.includes(actorId)
        ? prev.filter((id) => id !== actorId)
        : prev.length < 4
        ? [...prev, actorId]
        : prev
    );
  };

  const selectedComparedActors = selectedChar.recommendations.filter((a) =>
    comparedActorIds.includes(a.id)
  );

  const rankBadges = ['🥇', '🥈', '🥉', '④', '⑤'];

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-4 h-4 text-[#C6A24D]" />
            <span>Signature Feature • Casting Intelligence Agent</span>
          </div>
          <h1 className="font-serif text-3xl font-black text-[#F1F0EC] flex items-center gap-3">
            Casting Studio
            <span className="text-xs font-serif font-semibold px-2.5 py-0.5 rounded bg-[#C6A24D]/20 text-[#E8C878] border border-[#C6A24D]/40">
              Live Wikipedia Integration
            </span>
          </h1>
          <p className="text-xs text-[#96959c] mt-1">
            Evaluating candidate actors for <strong className="text-[#E8C878] font-serif">{selectedChar.name}</strong> ({selectedChar.role})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAlternativeMode(!showAlternativeMode)}
            className={`px-3.5 py-2 rounded text-xs font-semibold flex items-center gap-1.5 transition-all border ${
              showAlternativeMode
                ? 'bg-[#C6A24D]/20 text-[#E8C878] border-[#C6A24D]'
                : 'bg-[#1B1B1E] text-[#96959c] hover:text-[#F1F0EC] border-[#302f33]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Casting Alternative Mode</span>
          </button>

          {comparedActorIds.length > 0 && (
            <button
              onClick={() => setIsComparisonOpen(true)}
              className="btn-gold-sheen px-4 py-2 rounded text-xs font-bold flex items-center gap-2 shadow-gold-glow animate-bounce"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Compare Selected ({comparedActorIds.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Casting Alternative Mode Filter Bar */}
      {showAlternativeMode && (
        <div className="p-4 bg-[#141416] border border-[#C6A24D]/40 rounded-sm space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-[#232326]">
            <span className="font-serif font-bold text-[#E8C878] flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[#C6A24D]" /> Casting Alternative Filter Parameters
            </span>
            <button
              onClick={() => {
                setIndustryFilter('All');
                setExpFilter('All');
                setBudgetFilter('All');
              }}
              className="text-[11px] text-[#8a763c] hover:text-[#E8C878] flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset Filters
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block text-[#96959c] mb-1 font-medium">Industry Filter</label>
              <select
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
                className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-2.5 py-1.5 text-[#F1F0EC] outline-none"
              >
                <option value="All">All Cinema Industries</option>
                <option value="Tamil">Tamil Cinema (Kollywood)</option>
                <option value="Bollywood">Bollywood (Hindi)</option>
                <option value="Hollywood">Hollywood (International)</option>
                <option value="Malayalam">Malayalam Cinema</option>
                <option value="Telugu">Telugu Cinema</option>
              </select>
            </div>

            <div>
              <label className="block text-[#96959c] mb-1 font-medium">Experience Level Tier</label>
              <select
                value={expFilter}
                onChange={(e) => setExpFilter(e.target.value as ExperienceLevel)}
                className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-2.5 py-1.5 text-[#F1F0EC] outline-none"
              >
                <option value="All">All Tiers</option>
                <option value="Superstar / A-List">Superstar / A-List</option>
                <option value="Established Lead">Established Lead</option>
                <option value="Mid-Career">Mid-Career</option>
                <option value="Emerging Talent">Emerging Talent</option>
              </select>
            </div>

            <div>
              <label className="block text-[#96959c] mb-1 font-medium">Budget Preference</label>
              <select
                value={budgetFilter}
                onChange={(e) => setBudgetFilter(e.target.value as BudgetTier)}
                className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-2.5 py-1.5 text-[#F1F0EC] outline-none"
              >
                <option value="All">All Budgets</option>
                <option value="Indie / Low Budget">Indie / Low Budget Tier</option>
                <option value="Medium Budget">Medium Budget Tier</option>
                <option value="Premium / Blockbuster">Premium / Superstar Tier</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Two-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Rail: Characters List */}
        <div className="lg:col-span-3 bg-[#141416] border border-[#302f33] rounded-sm p-3 space-y-2 h-fit">
          <div className="px-3 py-2 text-[10px] uppercase font-bold text-[#8a763c] tracking-wider font-serif">
            Select Character
          </div>

          <div className="space-y-1.5">
            {project.characters.map((char) => {
              const isSelected = char.id === selectedChar.id;
              return (
                <button
                  key={char.id}
                  onClick={() => {
                    setSelectedCharId(char.id);
                    setComparedActorIds([]);
                  }}
                  className={`w-full text-left p-3 rounded-sm border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#1B1B1E] border-[#C6A24D] shadow-[0_0_15px_rgba(198,162,77,0.15)]'
                      : 'bg-[#141416] border-[#232326] hover:border-[#302f33] hover:bg-[#1B1B1E]'
                  }`}
                >
                  <div className="space-y-0.5 truncate mr-1">
                    <div className={`font-serif font-bold text-xs ${isSelected ? 'text-[#E8C878]' : 'text-[#F1F0EC] group-hover:text-[#E8C878]'}`}>
                      {char.name}
                    </div>
                    <div className="text-[10px] text-[#96959c]">{char.role}</div>
                  </div>
                  <span className="text-[10px] font-serif font-bold text-[#8a763c]">
                    Top {char.recommendations.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Panel: Top 5 Actor Recommendations */}
        <div className="lg:col-span-9 space-y-5">
          
          {/* Character Summary Header */}
          <div className="p-4 bg-[#141416] border border-[#302f33] rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] text-[#8a763c] uppercase font-serif font-bold tracking-wider">Casting Dossier Target</span>
              <h3 className="font-serif text-xl font-bold text-[#F1F0EC]">
                {selectedChar.name} <span className="text-xs font-normal text-[#96959c]">({selectedChar.role}, Age {selectedChar.ageRange})</span>
              </h3>
              <p className="text-xs text-[#96959c] mt-0.5">{selectedChar.castingRequirements}</p>
            </div>

            <div className="text-xs text-right">
              <span className="text-[#8a763c] font-serif block">Weighted Rubric Model</span>
              <span className="text-[10px] text-[#6d6c72]">Acting Style 25% • Age 15% • Genre 15% • Range 15% • Roles 15% • Presence 10% • Market 5%</span>
            </div>
          </div>

          {/* Actor Cards */}
          {filteredRecommendations.length === 0 ? (
            <div className="p-12 text-center bg-[#141416] border border-[#302f33] rounded-sm text-[#96959c] space-y-2">
              <p>No candidates match the selected alternative filters.</p>
              <button
                onClick={() => {
                  setIndustryFilter('All');
                  setExpFilter('All');
                  setBudgetFilter('All');
                }}
                className="text-xs text-[#E8C878] underline"
              >
                Reset filters to view standard Top 5
              </button>
            </div>
          ) : (
            filteredRecommendations.map((actor, idx) => {
              const isCompared = comparedActorIds.includes(actor.id);
              const wiki = liveWikiData[actor.name.toLowerCase()];

              return (
                <div
                  key={actor.id}
                  className="bg-[#141416] border border-[#302f33] hover:border-[#C6A24D]/60 rounded-sm p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(198,162,77,0.12)] space-y-4 group relative"
                >
                  {/* Top Bar: Rank, Name, Live Photo, Match % */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    <div className="flex items-start sm:items-center gap-4">
                      {/* Live Wikipedia Circular Photo */}
                      <WikiActorImage
                        actorName={actor.name}
                        wikiQueryName={actor.wikiQueryName}
                        size={72}
                        onDataLoaded={(data) => {
                          setLiveWikiData((prev) => ({
                            ...prev,
                            [actor.name.toLowerCase()]: data,
                          }));
                        }}
                      />

                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-base font-serif" title={`Rank #${actor.rank}`}>
                            {rankBadges[idx] || `#${actor.rank}`}
                          </span>
                          <h4 className="font-serif font-bold text-lg sm:text-xl text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
                            {actor.name}
                          </h4>
                          <span className="px-2 py-0.5 rounded bg-[#1B1B1E] border border-[#232326] text-[10px] text-[#8a763c]">
                            {actor.industry}
                          </span>
                        </div>

                        {/* Live Wikipedia Bio Snippet */}
                        <p className="text-xs text-[#96959c] line-clamp-2 max-w-xl leading-relaxed">
                          {wiki?.extract || actor.reasoning.slice(0, 130) + '...'}
                        </p>

                        <div className="flex items-center gap-3 pt-0.5">
                          <span className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Live Wikipedia Data
                          </span>
                          
                          <a
                            href={wiki?.pageUrl || actor.wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(actor.wikiQueryName)}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] text-[#C6A24D] hover:text-[#E8C878] inline-flex items-center gap-1 transition-colors"
                          >
                            View on Wikipedia <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Right Match Score & Add to Comparison */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-2 shrink-0">
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-serif font-black text-gold-sheen">
                          {actor.matchPercentage}%
                        </div>
                        <span className="text-[10px] text-[#8a763c] uppercase tracking-wider font-semibold block">
                          Weighted Fit
                        </span>
                      </div>

                      <button
                        onClick={() => handleToggleCompare(actor.id)}
                        className={`px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1.5 transition-all border ${
                          isCompared
                            ? 'bg-[#C6A24D] text-[#0A0A0B] border-[#C6A24D]'
                            : 'bg-[#1B1B1E] text-[#96959c] hover:text-[#F1F0EC] border-[#302f33]'
                        }`}
                      >
                        {isCompared ? (
                          <>
                            <CheckSquare className="w-3.5 h-3.5" />
                            <span>In Comparison</span>
                          </>
                        ) : (
                          <>
                            <Square className="w-3.5 h-3.5" />
                            <span>Add to Compare</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Shimmering Gold Match Score Bar */}
                  <div className="space-y-1">
                    <div className="h-2 w-full bg-[#0A0A0B] rounded-full overflow-hidden border border-[#232326]">
                      <div
                        className="h-full rounded-full gold-shimmer-bar transition-all duration-700"
                        style={{ width: `${actor.matchPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* AI Reasoning Paragraph */}
                  <div className="p-3.5 bg-[#1B1B1E] border border-[#232326] rounded-sm text-xs text-[#F1F0EC]/90 leading-relaxed">
                    <strong className="text-[#E8C878] font-serif">CineVerse AI Reasoning: </strong>
                    {actor.reasoning}
                  </div>

                  {/* 7-Part Rubric Miniature Pills */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 text-[10px]">
                    <div className="p-1.5 bg-[#101012] rounded border border-[#232326] text-center">
                      <span className="text-[#6d6c72] block">Acting Style</span>
                      <span className="text-[#E8C878] font-semibold">{actor.rubric.actingStyleMatch}/25</span>
                    </div>
                    <div className="p-1.5 bg-[#101012] rounded border border-[#232326] text-center">
                      <span className="text-[#6d6c72] block">Age/Look</span>
                      <span className="text-[#E8C878] font-semibold">{actor.rubric.ageAppearance}/15</span>
                    </div>
                    <div className="p-1.5 bg-[#101012] rounded border border-[#232326] text-center">
                      <span className="text-[#6d6c72] block">Genre Auth.</span>
                      <span className="text-[#E8C878] font-semibold">{actor.rubric.genreExperience}/15</span>
                    </div>
                    <div className="p-1.5 bg-[#101012] rounded border border-[#232326] text-center">
                      <span className="text-[#6d6c72] block">Emo Range</span>
                      <span className="text-[#E8C878] font-semibold">{actor.rubric.emotionalRange}/15</span>
                    </div>
                    <div className="p-1.5 bg-[#101012] rounded border border-[#232326] text-center">
                      <span className="text-[#6d6c72] block">Past Roles</span>
                      <span className="text-[#E8C878] font-semibold">{actor.rubric.previousRoleSimilarity}/15</span>
                    </div>
                    <div className="p-1.5 bg-[#101012] rounded border border-[#232326] text-center">
                      <span className="text-[#6d6c72] block">Screen Presence</span>
                      <span className="text-[#E8C878] font-semibold">{actor.rubric.screenPresence}/10</span>
                    </div>
                    <div className="p-1.5 bg-[#101012] rounded border border-[#232326] text-center">
                      <span className="text-[#6d6c72] block">Market Fit</span>
                      <span className="text-[#E8C878] font-semibold">{actor.rubric.marketFit}/5</span>
                    </div>
                  </div>

                  {/* Strengths & Potential Challenge Lines */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#8a763c] tracking-wider block">Key Casting Strengths</span>
                      {actor.strengths.map((s, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[#96959c] text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A24D] shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-[#8a763c] tracking-wider block">Potential Challenge</span>
                      <div className="flex items-start gap-1.5 text-[#6d6c72] text-[11px]">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                        <span>{actor.potentialChallenge}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}

          {/* Responsible AI Disclaimer Banner */}
          <div className="p-4 bg-[#101012] border border-[#232326] rounded-sm text-[11px] text-[#6d6c72] leading-relaxed flex items-start gap-3">
            <Info className="w-4 h-4 text-[#8a763c] shrink-0 mt-0.5" />
            <div>
              <strong>Responsible AI & Attribution Disclaimer:</strong> Casting recommendations and percentage scores are autonomous AI-generated predictions derived from the screenplay's narrative requirements. Actor headshots and biographical abstracts are queried live from the Wikipedia REST API (CC BY-SA). Actual casting negotiations, actor interest, and scheduling availability must be independently confirmed by filmmakers and talent representatives.
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Modal */}
      <ComparisonModal
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        character={selectedChar}
        selectedActors={selectedComparedActors}
        onRemoveActor={(id) => setComparedActorIds((prev) => prev.filter((aId) => aId !== id))}
      />
    </div>
  );
};
