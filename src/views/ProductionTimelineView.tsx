import React from 'react';
import { MovieProject } from '../types';
import { CalendarClock, AlertTriangle, CheckCircle2, Flame, ShieldAlert, Sparkles, Clock } from 'lucide-react';

interface ProductionTimelineViewProps {
  project: MovieProject;
}

export const ProductionTimelineView: React.FC<ProductionTimelineViewProps> = ({ project }) => {
  const { timeline } = project;

  const complexityBadgeColor = {
    Easy: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60',
    Moderate: 'bg-blue-950/60 text-blue-300 border-blue-800/60',
    Complex: 'bg-amber-950/60 text-amber-300 border-amber-800/60',
    'Highly Complex': 'bg-rose-950/60 text-rose-300 border-rose-800/60',
  }[timeline.complexityBadge] || 'bg-amber-950/60 text-amber-300 border-amber-800/60';

  const riskBadgeColor = {
    Medium: 'bg-amber-950/60 text-amber-300 border-amber-800/50',
    High: 'bg-rose-950/60 text-rose-300 border-rose-800/50',
    Critical: 'bg-red-950 text-red-200 border-red-700 animate-pulse',
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <CalendarClock className="w-4 h-4 text-[#C6A24D]" />
            <span>Timeline Planning Agent</span>
          </div>
          <h1 className="font-serif text-3xl font-black text-[#F1F0EC]">
            Production Schedule & Risk Flags
          </h1>
          <p className="text-xs text-[#96959c] mt-1">
            End-to-end production milestones estimated for <strong className="text-[#E8C878] font-serif">{project.title}</strong>
          </p>
        </div>

        {/* Complexity Score Card */}
        <div className="p-4 rounded bg-[#141416] border border-[#C6A24D]/40 text-right shrink-0 shadow-[0_0_20px_rgba(198,162,77,0.15)] flex items-center gap-4">
          <div>
            <span className="text-[10px] text-[#8a763c] font-serif uppercase tracking-wider block font-bold">
              Complexity Index
            </span>
            <div className="text-2xl sm:text-3xl font-serif font-black text-gold-sheen">
              {timeline.complexityScore}<span className="text-xs text-[#96959c] font-sans">/100</span>
            </div>
          </div>

          <div className="pl-4 border-l border-[#302f33] text-left">
            <span className={`px-2.5 py-1 rounded text-xs font-bold border block text-center ${complexityBadgeColor}`}>
              {timeline.complexityBadge}
            </span>
            <span className="text-[10px] text-[#8a763c] block mt-1">Total: {timeline.totalWeeks} Weeks</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Vertical Timeline on Left, High-Cost Flags on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Vertical Timeline Phases */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-lg text-[#F1F0EC]">
              Sequential Milestone Phases
            </h3>
            <span className="text-xs text-[#8a763c] font-mono">
              Estimated Total: {timeline.totalWeeks} Weeks (~{Math.round(timeline.totalWeeks / 4.3)} Months)
            </span>
          </div>

          <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#C6A24D] before:via-[#8a763c] before:to-[#302f33]">
            {timeline.phases.map((phase, idx) => (
              <div key={idx} className="relative group">
                
                {/* Golden Node Dot */}
                <div className="absolute -left-[27px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-[#C6A24D] group-hover:border-[#E8C878] group-hover:shadow-[0_0_10px_rgba(198,162,77,0.6)] transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8C878]" />
                </div>

                {/* Phase Content Box */}
                <div className="bg-[#141416] border border-[#302f33] group-hover:border-[#C6A24D]/60 rounded-sm p-5 space-y-3 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-[#232326]">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-base text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
                        {phase.phase}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-[#E8C878] font-mono px-2 py-0.5 rounded bg-[#1B1B1E] border border-[#232326]">
                      {phase.durationWeeks} Weeks
                    </span>
                  </div>

                  {/* Key Milestones */}
                  <div className="space-y-1.5 text-xs">
                    <span className="text-[10px] uppercase font-bold text-[#8a763c] tracking-wider block font-serif">
                      Key Milestones & Deliverables
                    </span>
                    <ul className="space-y-1 text-[#F1F0EC]/85">
                      {phase.keyMilestones.map((m, mIdx) => (
                        <li key={mIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A24D] shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Critical Risks */}
                  {phase.criticalRisks && phase.criticalRisks.length > 0 && (
                    <div className="pt-2 text-xs space-y-1">
                      <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider block font-serif">
                        Critical Phase Risks
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.criticalRisks.map((r, rIdx) => (
                          <span key={rIdx} className="px-2 py-0.5 rounded bg-rose-950/40 text-rose-300 border border-rose-900/40 text-[11px]">
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: High-Cost Scene Flags */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-lg text-[#F1F0EC] flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-500" />
              <span>High-Cost Scene Flags</span>
            </h3>
            <span className="text-xs text-[#96959c]">{timeline.highCostFlags.length} Detected</span>
          </div>

          <div className="space-y-4">
            {timeline.highCostFlags.map((flag, idx) => (
              <div
                key={idx}
                className="bg-[#141416] border border-[#302f33] rounded-sm p-4 space-y-3 hover:border-amber-500/50 transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#8a763c]">FLAG #{idx + 1} • {flag.reason}</span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#F1F0EC] group-hover:text-amber-300 transition-colors">
                      {flag.sceneDescription}
                    </h4>
                  </div>

                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ${riskBadgeColor[flag.costImpact]}`}>
                    {flag.costImpact} Cost Risk
                  </span>
                </div>

                <div className="p-3 bg-[#1B1B1E] border border-[#232326] rounded text-xs space-y-1">
                  <span className="text-[10px] text-[#E8C878] font-serif font-bold uppercase tracking-wider block">
                    AI Mitigation Strategy
                  </span>
                  <p className="text-[#96959c] leading-relaxed">
                    {flag.mitigationSuggestion}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Schedule Optimization Callout */}
          <div className="p-4 bg-[#141416] border border-[#C6A24D]/30 rounded-sm text-xs space-y-2">
            <div className="flex items-center gap-2 text-[#E8C878] font-serif font-bold">
              <Sparkles className="w-4 h-4" />
              <span>CineVerse Schedule Intelligence</span>
            </div>
            <p className="text-[#96959c] leading-relaxed">
              Batching high-cost scene flags by lighting setup (e.g. night shoots block) reduces overall turnaround time and saves up to ~14% in crew overtime expenditure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
