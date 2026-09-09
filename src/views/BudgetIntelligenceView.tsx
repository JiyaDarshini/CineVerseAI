import React from 'react';
import { MovieProject } from '../types';
import { Coins, AlertTriangle, TrendingDown, DollarSign, Info, Sparkles, PieChart, ShieldCheck } from 'lucide-react';

interface BudgetIntelligenceViewProps {
  project: MovieProject;
}

export const BudgetIntelligenceView: React.FC<BudgetIntelligenceViewProps> = ({ project }) => {
  const { budget } = project;

  const scaleBadgeColors = {
    Low: 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60',
    Medium: 'bg-amber-950/60 text-amber-300 border-amber-800/60',
    High: 'bg-rose-950/60 text-rose-300 border-rose-800/60',
  };

  const scaleDotColors = {
    Low: 'bg-emerald-400',
    Medium: 'bg-amber-400',
    High: 'bg-rose-400',
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <Coins className="w-4 h-4 text-[#C6A24D]" />
            <span>Budget Intelligence Agent</span>
          </div>
          <h1 className="font-serif text-3xl font-black text-[#F1F0EC]">
            Financial Modeling & Allocations
          </h1>
          <p className="text-xs text-[#96959c] mt-1">
            Departmental cost distributions estimated for <strong className="text-[#E8C878] font-serif">{project.title}</strong>
          </p>
        </div>

        {/* Total Estimated Budget Callout */}
        <div className="p-4 rounded bg-[#141416] border border-[#C6A24D]/40 text-right shrink-0 shadow-[0_0_20px_rgba(198,162,77,0.15)]">
          <span className="text-[10px] text-[#8a763c] font-serif uppercase tracking-wider block font-bold">
            Preliminary Estimated Scale
          </span>
          <div className="text-2xl sm:text-3xl font-serif font-black text-gold-sheen">
            ${(budget.totalEstimatedBudgetUsd / 1000000).toFixed(2)}M USD
          </div>
          <div className="flex items-center justify-end gap-1.5 mt-1">
            <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border flex items-center gap-1.5 ${scaleBadgeColors[budget.scaleBadge]}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${scaleDotColors[budget.scaleBadge]}`} />
              {budget.scaleBadge} Production Scale
            </span>
          </div>
        </div>
      </div>

      {/* Complexity Paragraph */}
      <div className="p-5 bg-[#141416] border border-[#302f33] rounded-sm space-y-2">
        <div className="flex items-center gap-2 text-[#E8C878]">
          <Sparkles className="w-4 h-4" />
          <h3 className="font-serif font-bold text-sm">CineVerse Production Scale Analysis</h3>
        </div>
        <p className="text-xs sm:text-sm text-[#F1F0EC]/90 leading-relaxed">
          {budget.complexityParagraph}
        </p>
      </div>

      {/* Horizontal Allocation Bars */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-serif font-bold text-lg text-[#F1F0EC]">
            Departmental Capital Allocation
          </h3>
          <span className="text-xs text-[#8a763c]">Sum: 100% of Estimated Baseline</span>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {budget.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#141416] border border-[#302f33] hover:border-[#C6A24D]/50 rounded-sm p-4 sm:p-5 transition-all space-y-3 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif font-bold text-sm sm:text-base text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
                      {item.category}
                    </span>
                    <span className={`text-[10px] px-2 py-0.2 rounded border font-medium ${scaleBadgeColors[item.scaleLevel]}`}>
                      {item.scaleLevel} Cost Intensity
                    </span>
                  </div>
                  <p className="text-xs text-[#96959c] mt-0.5">{item.description}</p>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-serif font-bold text-base text-[#E8C878]">
                    {item.percentage}%
                  </div>
                  <span className="text-xs text-[#8a763c] font-mono">
                    ~${(item.estimatedAmountUsd / 1000).toLocaleString()}k USD
                  </span>
                </div>
              </div>

              {/* Shimmering Gold Progress Bar */}
              <div className="h-2.5 w-full bg-[#0A0A0B] rounded-full overflow-hidden border border-[#232326]">
                <div
                  className="h-full rounded-full gold-shimmer-bar transition-all duration-700"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              {/* Cost Drivers */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
                <span className="text-[#6d6c72] font-medium">Primary Drivers:</span>
                {item.costDrivers.map((cd, cdIdx) => (
                  <span
                    key={cdIdx}
                    className="px-2 py-0.5 rounded bg-[#1B1B1E] border border-[#232326] text-[#96959c]"
                  >
                    {cd}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Actionable Cost-Efficiency Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div className="p-5 bg-[#141416] border border-[#302f33] rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-serif font-bold uppercase tracking-wider">
            <TrendingDown className="w-4 h-4" />
            <span>AI Cost Optimization Opportunities</span>
          </div>
          <ul className="text-xs text-[#96959c] space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Consolidate exterior night shots into contiguous 3-week blocks to avoid repeated lighting grid mobilization fees.</li>
            <li>Construct interior research chambers on soundstages rather than renting historical heritage properties.</li>
            <li>Explore state regional production tax rebates (~20-25% cashback on qualifying local labor spend).</li>
          </ul>
        </div>

        <div className="p-5 bg-[#141416] border border-[#302f33] rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-serif font-bold uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>High-Variance Production Risks</span>
          </div>
          <ul className="text-xs text-[#96959c] space-y-1.5 list-disc list-inside leading-relaxed">
            <li>Torrential rain simulation rigs in open port environments carry weather-related rescheduling risks.</li>
            <li>Lead cast multilingual dubbing contracts should be locked prior to principal photography start.</li>
            <li>VFX particle renders should be monitored weekly to prevent 3rd-act editorial revisions bottlenecks.</li>
          </ul>
        </div>
      </div>

      {/* Mandatory Disclaimer Footer */}
      <div className="p-4 bg-[#101012] border border-[#232326] rounded-sm text-xs text-[#6d6c72] flex items-center gap-2.5">
        <Info className="w-4 h-4 text-[#8a763c] shrink-0" />
        <span>
          <strong>AI Disclaimer:</strong> AI-generated preliminary estimates — actual production costs may vary based on talent attachments, union agreements, currency fluctuations, and final shooting schedules.
        </span>
      </div>
    </div>
  );
};
