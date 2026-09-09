import React, { useState } from 'react';
import { MovieProject } from '../types';
import { runWhatIfSimulationAsync } from '../services/agentEngine';
import { Cpu, Sparkles, TrendingDown, Clock, Users, MapPin, Award } from 'lucide-react';

interface WhatIfSimulatorViewProps {
  project: MovieProject;
}

export const WhatIfSimulatorView: React.FC<WhatIfSimulatorViewProps> = ({ project }) => {
  const [query, setQuery] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);

  const [result, setResult] = useState<{
    query: string;
    summary: string;
    budgetImpact: string;
    castingImpact: string;
    timelineImpact: string;
    locationsImpact: string;
    verdict: string;
  } | null>({
    query: 'What if this movie is made with a 35% smaller budget?',
    summary: `Simulating a 35% budget reduction for "${project.title}". CineVerse AI recommends consolidating night harbor shoots into soundstage water tanks and shifting VFX from full CG simulation to in-camera practical lighting with digital touch-ups.`,
    budgetImpact: `Reduces total expenditure from ${project.budget.totalEstimatedBudgetUsd.toLocaleString()} USD down to ~$${Math.round(project.budget.totalEstimatedBudgetUsd * 0.65).toLocaleString()} USD. Cast budget adjusts to Mid-Career/Established ensemble.`,
    castingImpact: `Prioritize emerging or established theater-trained leads (Rank 3-5 candidates) over A-list superstars. Reduces talent remuneration by ~40%.`,
    timelineImpact: `Saves 4 weeks in pre-production and 3 weeks in post-production rendering cycles. Total schedule compresses from ${project.timeline.totalWeeks} weeks to ${project.timeline.totalWeeks - 7} weeks.`,
    locationsImpact: `Replace expensive restricted heritage/port permits with controlled film city warehouse sets and second-unit exterior plate capture.`,
    verdict: `Highly viable. The narrative gains claustrophobic psychological tension and gritty realism while safeguarding financial return on investment.`
  });

  const sampleScenarios = [
    'What if this movie is made with a 35% smaller budget?',
    'What if the story is set in Chennai instead of Mumbai?',
    'What if we cast an emerging theater-trained lead instead of an A-list superstar?',
    'What if principal photography is compressed to 8 weeks with dual-camera units?',
  ];

  const handleRunSimulation = async (scenarioText?: string) => {
    const q = scenarioText || query;
    if (!q.trim()) return;

    setIsSimulating(true);
    try {
      const res = await runWhatIfSimulationAsync(project, q);
      setResult(res);
    } catch (err) {
      console.error('Error running What If simulation:', err);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <Cpu className="w-4 h-4 text-[#C6A24D]" />
            <span>Director's Sandbox Engine</span>
          </div>
          <h1 className="font-serif text-3xl font-black text-[#F1F0EC]">
            "What If" Production Simulator
          </h1>
          <p className="text-xs text-[#96959c] mt-1">
            Simulate creative, financial, and logistical pivots grounded in <strong className="text-[#E8C878] font-serif">{project.title}</strong>
          </p>
        </div>
      </div>

      {/* Interactive Query Sandbox */}
      <div className="bg-[#141416] border border-[#C6A24D]/40 rounded-sm p-6 space-y-4 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
        <label className="block text-xs font-serif font-bold text-[#E8C878] uppercase tracking-wider">
          Ask a Production Hypothesis or Pivot Scenario
        </label>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleRunSimulation()}
            placeholder="e.g. What if the budget is reduced by 30%? / What if shot in London?"
            className="flex-1 bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-4 py-2.5 text-xs text-[#F1F0EC] outline-none transition-colors"
          />
          <button
            onClick={() => handleRunSimulation()}
            disabled={isSimulating}
            className="btn-gold-sheen px-5 py-2.5 rounded-sm text-xs font-bold flex items-center justify-center gap-2 shrink-0 shadow-gold-glow disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isSimulating ? 'Simulating Multi-Agent Impact...' : 'Run Simulation'}</span>
          </button>
        </div>

        {/* Quick Scenario Chips */}
        <div className="space-y-1.5 pt-1 text-xs">
          <span className="text-[10px] text-[#8a763c] uppercase font-bold tracking-wider block font-serif">
            Suggested Director Hypotheses
          </span>
          <div className="flex flex-wrap gap-2">
            {sampleScenarios.map((sc, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(sc);
                  handleRunSimulation(sc);
                }}
                className="px-3 py-1.5 rounded bg-[#1B1B1E] hover:bg-[#202023] text-[#96959c] hover:text-[#E8C878] border border-[#232326] hover:border-[#C6A24D]/40 text-[11px] text-left transition-all"
              >
                {sc}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Simulation Result Output */}
      {result && (
        <div className="bg-[#141416] border border-[#302f33] rounded-sm p-6 sm:p-8 space-y-6 animate-fadeIn">
          
          {/* Top Summary Banner */}
          <div className="space-y-2 pb-5 border-b border-[#232326]">
            <div className="flex items-center gap-2 text-xs text-[#8a763c]">
              <span className="font-serif uppercase tracking-wider font-bold">Simulated Hypothesis:</span>
              <span className="text-[#E8C878] italic font-serif text-sm">"{result.query}"</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F1F0EC] leading-relaxed">
              {result.summary}
            </p>
          </div>

          {/* 4 Impact Dimensions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            
            {/* 1. Budget Impact */}
            <div className="p-4 bg-[#1B1B1E] border border-[#232326] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E8C878] font-serif font-bold uppercase tracking-wider">
                <TrendingDown className="w-4 h-4 text-[#C6A24D]" />
                <span>Budget & Financial Impact</span>
              </div>
              <p className="text-[#96959c] leading-relaxed">
                {result.budgetImpact}
              </p>
            </div>

            {/* 2. Casting Impact */}
            <div className="p-4 bg-[#1B1B1E] border border-[#232326] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E8C878] font-serif font-bold uppercase tracking-wider">
                <Users className="w-4 h-4 text-[#C6A24D]" />
                <span>Casting Alignment Impact</span>
              </div>
              <p className="text-[#96959c] leading-relaxed">
                {result.castingImpact}
              </p>
            </div>

            {/* 3. Timeline Impact */}
            <div className="p-4 bg-[#1B1B1E] border border-[#232326] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E8C878] font-serif font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4 text-[#C6A24D]" />
                <span>Schedule & Timeline Impact</span>
              </div>
              <p className="text-[#96959c] leading-relaxed">
                {result.timelineImpact}
              </p>
            </div>

            {/* 4. Locations Impact */}
            <div className="p-4 bg-[#1B1B1E] border border-[#232326] rounded-sm space-y-2">
              <div className="flex items-center gap-2 text-[#E8C878] font-serif font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#C6A24D]" />
                <span>Location Logistics Impact</span>
              </div>
              <p className="text-[#96959c] leading-relaxed">
                {result.locationsImpact}
              </p>
            </div>
          </div>

          {/* CineVerse Executive Verdict */}
          <div className="p-5 bg-gradient-to-r from-[#1B1B1E] to-[#141416] border border-[#C6A24D]/40 rounded-sm space-y-2">
            <div className="flex items-center gap-2 text-[#E8C878]">
              <Award className="w-5 h-5 text-[#C6A24D]" />
              <h4 className="font-serif font-bold text-sm">CineVerse AI Executive Verdict</h4>
            </div>
            <p className="text-xs sm:text-sm text-[#F1F0EC]/90 leading-relaxed italic">
              "{result.verdict}"
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
