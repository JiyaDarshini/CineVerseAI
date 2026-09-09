import React from 'react';
import { PIPELINE_STAGES } from '../services/agentEngine';
import { Sparkles, CheckCircle2, Loader2, Film, Bot } from 'lucide-react';

interface AnalysisLoadingViewProps {
  movieTitle: string;
  currentStageIndex: number;
  progressPct: number;
}

export const AnalysisLoadingView: React.FC<AnalysisLoadingViewProps> = ({
  movieTitle,
  currentStageIndex,
  progressPct,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0A0A0B] flex flex-col items-center justify-center p-6 app-ambient-glow animate-fadeIn">
      {/* Background radial glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#C6A24D]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-xl bg-[#141416] border border-[#C6A24D]/40 rounded-sm p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] space-y-6">
        
        {/* Animated Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 mx-auto rounded-sm bg-gradient-to-br from-[#202023] to-[#141416] border border-[#C6A24D] flex items-center justify-center text-[#E8C878] shadow-[0_0_25px_rgba(198,162,77,0.4)] animate-pulse">
            <Film className="w-6 h-6 text-[#E8C878]" />
          </div>
          
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#F1F0EC]">
            CineVerse AI is analyzing your screenplay
          </h2>
          <p className="text-xs text-[#E8C878] italic font-serif">
            "{movieTitle}"
          </p>
        </div>

        {/* Shimmering Gold Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold">
            <span className="text-[#8a763c] uppercase font-serif tracking-wider">Multi-Agent Pipeline</span>
            <span className="text-[#E8C878] font-mono">{progressPct}%</span>
          </div>
          <div className="h-2 w-full bg-[#1B1B1E] rounded-full overflow-hidden border border-[#302f33] p-0.5">
            <div
              className="h-full rounded-full gold-shimmer-bar transition-all duration-500 ease-out"
              style={{ width: `${Math.max(progressPct, 5)}%` }}
            />
          </div>
        </div>

        {/* Sequential Checklist Stages */}
        <div className="space-y-2.5 pt-2">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isCompleted = idx < currentStageIndex;
            const isCurrent = idx === currentStageIndex;
            const isPending = idx > currentStageIndex;

            return (
              <div
                key={stage.id}
                className={`p-3 rounded-sm border transition-all flex items-start justify-between gap-3 ${
                  isCurrent
                    ? 'bg-[#1B1B1E] border-[#C6A24D] shadow-[0_0_15px_rgba(198,162,77,0.15)]'
                    : isCompleted
                    ? 'bg-[#141416] border-[#302f33] opacity-80'
                    : 'bg-[#141416]/50 border-transparent opacity-40'
                }`}
              >
                <div className="flex items-start gap-3">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-[#C6A24D] shrink-0 mt-0.5" />
                  ) : isCurrent ? (
                    <Loader2 className="w-4 h-4 text-[#E8C878] animate-spin shrink-0 mt-0.5" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-[#302f33] shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${isCurrent ? 'text-[#E8C878]' : isCompleted ? 'text-[#F1F0EC]' : 'text-[#96959c]'}`}>
                        {stage.label}
                      </span>
                    </div>
                    {isCurrent && (
                      <p className="text-[11px] text-[#96959c] mt-0.5 leading-snug animate-pulse">
                        {stage.description}
                      </p>
                    )}
                  </div>
                </div>

                <span className="text-[10px] text-[#8a763c] font-serif uppercase tracking-wider shrink-0">
                  {stage.agent.replace(' Agent', '')}
                </span>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="text-center pt-2">
          <span className="text-[11px] text-[#6d6c72] inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A24D]" />
            Evaluating character archetypes & live Wikipedia actor registry...
          </span>
        </div>
      </div>
    </div>
  );
};
