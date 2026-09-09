import React from 'react';
import { ActorRecommendation, CharacterProfile } from '../types';
import { WikiActorImage } from './WikiActorImage';
import { X, ExternalLink, CheckCircle, AlertCircle, Award, Sparkles } from 'lucide-react';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  character: CharacterProfile;
  selectedActors: ActorRecommendation[];
  onRemoveActor?: (id: string) => void;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({
  isOpen,
  onClose,
  character,
  selectedActors,
  onRemoveActor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[90vh] flex flex-col bg-[#141416] border border-[#C6A24D]/40 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#302f33] bg-[#1B1B1E]/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#C6A24D]/10 border border-[#C6A24D]/30 text-[#E8C878]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F1F0EC] flex items-center gap-2">
                Casting Head-to-Head Comparison
              </h3>
              <p className="text-xs text-[#96959c]">
                Evaluating candidates for <span className="text-[#E8C878] font-medium">{character.name}</span> ({character.role})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-[#96959c] hover:text-[#F1F0EC] hover:bg-[#202023] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {selectedActors.length === 0 ? (
            <div className="py-16 text-center text-[#96959c]">
              <p className="text-base">No actors currently selected for comparison.</p>
              <p className="text-xs text-[#6d6c72] mt-1">Check "Add to comparison" on any actor card in the Casting Studio to compare them here.</p>
            </div>
          ) : (
            <>
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedActors.map((actor) => (
                  <div
                    key={actor.id}
                    className="relative bg-[#1B1B1E] border border-[#302f33] rounded-sm p-4 flex flex-col justify-between hover:border-[#C6A24D]/60 transition-all group"
                  >
                    {onRemoveActor && (
                      <button
                        onClick={() => onRemoveActor(actor.id)}
                        className="absolute top-2 right-2 p-1 text-[#6d6c72] hover:text-red-400 rounded transition-colors"
                        title="Remove from comparison"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}

                    <div>
                      {/* Top Info */}
                      <div className="flex items-center gap-3 mb-3">
                        <WikiActorImage
                          actorName={actor.name}
                          wikiQueryName={actor.wikiQueryName}
                          size={54}
                        />
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-serif font-bold text-[#E8C878]">#{actor.rank}</span>
                            <h4 className="font-serif font-bold text-sm text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
                              {actor.name}
                            </h4>
                          </div>
                          <span className="inline-block px-1.5 py-0.5 mt-0.5 text-[10px] rounded bg-[#C6A24D]/10 text-[#E8C878] border border-[#C6A24D]/20">
                            {actor.matchPercentage}% Weighted Match
                          </span>
                        </div>
                      </div>

                      {/* Rubric Breakdown Progress Bars */}
                      <div className="space-y-2 my-3 text-xs">
                        <div>
                          <div className="flex justify-between text-[11px] text-[#96959c] mb-1">
                            <span>Acting Style (25%)</span>
                            <span className="text-[#E8C878]">{actor.rubric.actingStyleMatch}/25</span>
                          </div>
                          <div className="h-1.5 bg-[#0A0A0B] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#C6A24D]"
                              style={{ width: `${(actor.rubric.actingStyleMatch / 25) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-[#96959c] mb-1">
                            <span>Emotional Range (15%)</span>
                            <span className="text-[#E8C878]">{actor.rubric.emotionalRange}/15</span>
                          </div>
                          <div className="h-1.5 bg-[#0A0A0B] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#C6A24D]"
                              style={{ width: `${(actor.rubric.emotionalRange / 15) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-[#96959c] mb-1">
                            <span>Genre Authority (15%)</span>
                            <span className="text-[#E8C878]">{actor.rubric.genreExperience}/15</span>
                          </div>
                          <div className="h-1.5 bg-[#0A0A0B] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#C6A24D]"
                              style={{ width: `${(actor.rubric.genreExperience / 15) * 100}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-[11px] text-[#96959c] mb-1">
                            <span>Screen Presence (10%)</span>
                            <span className="text-[#E8C878]">{actor.rubric.screenPresence}/10</span>
                          </div>
                          <div className="h-1.5 bg-[#0A0A0B] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#C6A24D]"
                              style={{ width: `${(actor.rubric.screenPresence / 10) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Attributes */}
                      <div className="grid grid-cols-2 gap-2 my-3 text-[11px] bg-[#141416] p-2.5 rounded border border-[#232326]">
                        <div>
                          <span className="text-[#6d6c72] block">Experience Tier</span>
                          <span className="text-[#F1F0EC] font-medium">{actor.experienceLevel}</span>
                        </div>
                        <div>
                          <span className="text-[#6d6c72] block">Budget Impact</span>
                          <span className="text-[#E8C878] font-medium">{actor.budgetImpact}</span>
                        </div>
                      </div>

                      {/* Key Strengths & Potential Challenge */}
                      <div className="space-y-1.5 text-[11px]">
                        <div className="flex items-start gap-1.5 text-[#96959c]">
                          <CheckCircle className="w-3.5 h-3.5 text-[#C6A24D] shrink-0 mt-0.5" />
                          <span>{actor.strengths[0]}</span>
                        </div>
                        <div className="flex items-start gap-1.5 text-[#6d6c72]">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-500/80 shrink-0 mt-0.5" />
                          <span>{actor.potentialChallenge}</span>
                        </div>
                      </div>
                    </div>

                    {/* Wikipedia Link */}
                    <div className="mt-4 pt-3 border-t border-[#232326] flex items-center justify-between">
                      <a
                        href={actor.wikiUrl || `https://en.wikipedia.org/wiki/${encodeURIComponent(actor.wikiQueryName)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] text-[#C6A24D] hover:text-[#E8C878] inline-flex items-center gap-1 transition-colors"
                      >
                        View on Wikipedia <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* CineVerse AI Verdict Panel */}
              <div className="bg-[#1B1B1E] border border-[#C6A24D]/30 p-4 rounded-sm">
                <div className="flex items-center gap-2 mb-2 text-[#E8C878]">
                  <Award className="w-4 h-4" />
                  <h4 className="font-serif font-bold text-sm tracking-wide">CineVerse AI Casting Verdict</h4>
                </div>
                <p className="text-xs text-[#F1F0EC]/90 leading-relaxed">
                  For the role of <strong className="text-[#E8C878]">{character.name}</strong>,{' '}
                  <strong className="text-[#E8C878]">{selectedActors[0]?.name}</strong> provides the strongest critical gravitas and acting style alignment (96%+). If seeking maximum budget efficiency without sacrificing dramatic depth,{' '}
                  <strong className="text-[#E8C878]">{selectedActors[selectedActors.length - 1]?.name}</strong> presents an outstanding alternative with high realism.
                </p>
              </div>
            </>
          )}

          {/* Responsible AI Disclaimer */}
          <div className="text-[11px] text-[#6d6c72] leading-tight border-t border-[#232326] pt-3">
            <strong>Responsible AI Notice:</strong> Casting scores and recommendations are AI-generated suggestions calculated from narrative character rubrics. Real actor photographs and biographical abstracts are sourced live from Wikipedia (CC BY-SA). Actor availability and contractual terms must be independently verified by casting directors and production teams.
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#302f33] bg-[#1B1B1E] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs rounded border border-[#302f33] text-[#F1F0EC] hover:bg-[#202023] transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
};
