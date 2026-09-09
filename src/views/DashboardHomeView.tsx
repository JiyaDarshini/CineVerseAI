import React from 'react';
import { MovieProject, UserProfile } from '../types';
import { TabType } from '../components/Sidebar';
import {
  Sparkles,
  Users,
  Coins,
  CalendarClock,
  Plus,
  ArrowRight,
  TrendingUp,
  Film,
  Bot,
  Lightbulb,
  AlertCircle
} from 'lucide-react';

interface DashboardHomeViewProps {
  project: MovieProject;
  projects: MovieProject[];
  user: UserProfile | null;
  onSelectTab: (tab: TabType) => void;
  onOpenCreateModal: () => void;
  onOpenAssistant: () => void;
}

export const DashboardHomeView: React.FC<DashboardHomeViewProps> = ({
  project,
  projects,
  user,
  onSelectTab,
  onOpenCreateModal,
  onOpenAssistant,
}) => {
  const totalCharacters = projects.reduce((acc, p) => acc + p.characters.length, 0);
  const totalRecs = projects.reduce((acc, p) => acc + p.characters.reduce((cAcc, c) => cAcc + c.recommendations.length, 0), 0);

  return (
    <div className="p-6 lg:p-10 space-y-8 max-w-7xl mx-auto">
      
      {/* Top Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <span className="w-2 h-2 rounded-full bg-[#C6A24D]" />
            <span>Workspace • {user?.role || 'Director'} Console</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-black text-[#F1F0EC]">
            Welcome, <span className="text-gold-sheen">{user?.name || 'Filmmaker'}</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#96959c] mt-1">
            Current Active Production: <strong className="text-[#E8C878] font-serif">{project.title}</strong> ({project.targetIndustry})
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAssistant}
            className="px-3.5 py-2 rounded bg-[#1B1B1E] hover:bg-[#202023] border border-[#302f33] hover:border-[#C6A24D]/50 text-xs font-semibold text-[#E8C878] flex items-center gap-2 transition-all shadow-sm"
          >
            <Bot className="w-4 h-4" />
            <span>Ask CineVerse Assistant</span>
          </button>

          <button
            onClick={onOpenCreateModal}
            className="btn-gold-sheen px-4 py-2 rounded text-xs font-bold flex items-center gap-2 shadow-gold-glow"
          >
            <Plus className="w-4 h-4" />
            <span>+ Create New Movie Project</span>
          </button>
        </div>
      </div>

      {/* 4 Stat Cards with Pulsing Gold Top Border */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Active Projects */}
        <div className="stat-card-gold p-5 space-y-2">
          <div className="flex items-center justify-between text-[#8a763c]">
            <span className="text-xs font-medium uppercase tracking-wider font-serif">Active Projects</span>
            <Film className="w-4 h-4 text-[#C6A24D]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-black text-[#F1F0EC]">{projects.length}</span>
            <span className="text-[10px] text-emerald-400 font-semibold">+1 this week</span>
          </div>
          <p className="text-[11px] text-[#96959c]">Multi-region screenplay pipelines</p>
        </div>

        {/* Card 2: Scripts Analyzed */}
        <div className="stat-card-gold p-5 space-y-2">
          <div className="flex items-center justify-between text-[#8a763c]">
            <span className="text-xs font-medium uppercase tracking-wider font-serif">Scripts Analyzed</span>
            <TrendingUp className="w-4 h-4 text-[#C6A24D]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-black text-[#F1F0EC]">18</span>
            <span className="text-[10px] text-[#E8C878] font-semibold">100% Parsed</span>
          </div>
          <p className="text-[11px] text-[#96959c]">Full 7-agent pipeline verification</p>
        </div>

        {/* Card 3: Characters Detected */}
        <div className="stat-card-gold p-5 space-y-2">
          <div className="flex items-center justify-between text-[#8a763c]">
            <span className="text-xs font-medium uppercase tracking-wider font-serif">Characters Detected</span>
            <Users className="w-4 h-4 text-[#C6A24D]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-black text-[#F1F0EC]">{totalCharacters}</span>
            <span className="text-[10px] text-[#C6A24D] font-semibold">{project.characters.length} in active</span>
          </div>
          <p className="text-[11px] text-[#96959c]">Structured psychological profiles</p>
        </div>

        {/* Card 4: Casting Recommendations */}
        <div className="stat-card-gold p-5 space-y-2">
          <div className="flex items-center justify-between text-[#8a763c]">
            <span className="text-xs font-medium uppercase tracking-wider font-serif">Casting Recommendations</span>
            <Sparkles className="w-4 h-4 text-[#C6A24D]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl font-black text-[#F1F0EC]">{totalRecs}</span>
            <span className="text-[10px] text-emerald-400 font-semibold">Live Wiki Sync</span>
          </div>
          <p className="text-[11px] text-[#96959c]">Ranked Top 5 with 7-part rubric</p>
        </div>
      </div>

      {/* 3 Shortcut Cards into Characters / Casting / Budget */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Shortcut 1: Characters */}
        <div
          onClick={() => onSelectTab('characters')}
          className="cine-card p-5 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center text-[#E8C878]">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#8a763c] uppercase tracking-wider">Module 01</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
              Character Intelligence
            </h3>
            <p className="text-xs text-[#96959c] mt-2 leading-relaxed">
              Explore {project.characters.length} detected character dossiers, motivations, psychological journeys, and casting requirements.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#232326] flex items-center justify-between text-xs text-[#E8C878] font-semibold">
            <span>Inspect Character Roster</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Shortcut 2: Casting Studio */}
        <div
          onClick={() => onSelectTab('casting')}
          className="cine-card p-5 cursor-pointer flex flex-col justify-between group border-[#C6A24D]/40 bg-gradient-to-br from-[#1B1B1E] to-[#141416]"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded bg-[#C6A24D]/20 border border-[#C6A24D]/50 flex items-center justify-center text-[#E8C878] shadow-[0_0_15px_rgba(198,162,77,0.3)]">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#C6A24D] text-[#0A0A0B]">SIGNATURE</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
              Casting Studio
            </h3>
            <p className="text-xs text-[#96959c] mt-2 leading-relaxed">
              Ranked Top 5 candidate actors with live Wikipedia portraits, weighted score breakdowns, and head-to-head comparison.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#232326] flex items-center justify-between text-xs text-[#E8C878] font-semibold">
            <span>Launch Casting Studio</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Shortcut 3: Budget & Timeline */}
        <div
          onClick={() => onSelectTab('budget')}
          className="cine-card p-5 cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center text-[#E8C878]">
                <Coins className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-[#8a763c] uppercase tracking-wider">Module 03</span>
            </div>
            <h3 className="font-serif font-bold text-lg text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
              Budget Intelligence
            </h3>
            <p className="text-xs text-[#96959c] mt-2 leading-relaxed">
              Estimated scale: ${(project.budget.totalEstimatedBudgetUsd / 1000000).toFixed(1)}M USD with category breakdown and risk flags.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-[#232326] flex items-center justify-between text-xs text-[#E8C878] font-semibold">
            <span>View Financial Model</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* AI Insights Panel (Running List of Generated Observations) */}
      <div className="bg-[#141416] border border-[#302f33] rounded-sm p-6 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-[#232326]">
          <div className="flex items-center gap-2 text-[#E8C878]">
            <Lightbulb className="w-5 h-5 text-[#C6A24D]" />
            <h3 className="font-serif font-bold text-base text-[#F1F0EC]">
              Autonomous AI Production Insights Feed
            </h3>
          </div>
          <span className="text-[11px] text-[#8a763c] font-medium">
            Live Project Context: {project.title}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {project.aiInsights.map((insight, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded bg-[#1B1B1E] border border-[#232326] flex items-start gap-3 hover:border-[#C6A24D]/40 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#E8C878] text-xs font-serif font-bold">
                {idx + 1}
              </div>
              <p className="text-xs text-[#F1F0EC]/85 leading-relaxed">
                {insight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Project Executive Dossier */}
      <div className="bg-[#141416] border border-[#302f33] rounded-sm p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#232326]">
          <div>
            <span className="text-[10px] font-bold text-[#8a763c] uppercase tracking-wider font-serif">Executive Screenplay Log</span>
            <h3 className="font-serif text-xl font-bold text-[#F1F0EC]">{project.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] bg-[#C6A24D]/10 text-[#E8C878] border border-[#C6A24D]/30">
              {project.productionType}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-[#1B1B1E] text-[#96959c] border border-[#302f33]">
              {project.estimatedBudgetRange}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs">
          <div className="space-y-1.5 lg:col-span-2">
            <h4 className="font-serif font-semibold text-[#E8C878]">Logline</h4>
            <p className="text-[#96959c] leading-relaxed italic">"{project.storyAnalysis.logline}"</p>
            <h4 className="font-serif font-semibold text-[#E8C878] pt-2">Thematic Core</h4>
            <div className="flex flex-wrap gap-1.5">
              {project.storyAnalysis.themes.map((t, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-[#1B1B1E] text-[#F1F0EC] border border-[#232326] text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded bg-[#1B1B1E] border border-[#232326] space-y-2.5">
            <div className="flex justify-between">
              <span className="text-[#6d6c72]">Target Industry</span>
              <span className="text-[#F1F0EC] font-medium">{project.targetIndustry}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6d6c72]">Estimated Timeline</span>
              <span className="text-[#E8C878] font-medium">{project.timeline.totalWeeks} Weeks</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6d6c72]">Complexity Index</span>
              <span className="text-[#E8C878] font-medium">{project.timeline.complexityScore}/100 ({project.timeline.complexityBadge})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#6d6c72]">Key Locations</span>
              <span className="text-[#F1F0EC] font-medium">{project.locations.length} Scouted</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
