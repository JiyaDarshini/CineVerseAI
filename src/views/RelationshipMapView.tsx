import React, { useState } from 'react';
import { MovieProject, CharacterRelationship } from '../types';
import { GitFork, Heart, Flame, ShieldAlert, Sparkles, User, ArrowRight, Zap, Info } from 'lucide-react';

interface RelationshipMapViewProps {
  project: MovieProject;
  onNavigateToCharacter?: (charId: string) => void;
}

export const RelationshipMapView: React.FC<RelationshipMapViewProps> = ({
  project,
  onNavigateToCharacter,
}) => {
  const [selectedRelId, setSelectedRelId] = useState<string>(
    project.relationships[0]?.id || ''
  );

  const protagonist = project.characters.find((c) => c.role === 'Protagonist') || project.characters[0];
  const selectedRel = project.relationships.find((r) => r.id === selectedRelId) || project.relationships[0];

  const getTargetChar = (rel: CharacterRelationship) => {
    return project.characters.find((c) => c.id === rel.toCharacterId) || project.characters[1];
  };

  const getSourceChar = (rel: CharacterRelationship) => {
    return project.characters.find((c) => c.id === rel.fromCharacterId) || project.characters[0];
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <GitFork className="w-4 h-4 text-[#C6A24D]" />
            <span>Character Relationship Agent</span>
          </div>
          <h1 className="font-serif text-3xl font-black text-[#F1F0EC]">
            Interpersonal Tension Network
          </h1>
          <p className="text-xs text-[#96959c] mt-1">
            Visualizing dynamic emotional conflicts and alliances centered on <strong className="text-[#E8C878] font-serif">{protagonist?.name}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded bg-[#1B1B1E] border border-[#302f33] text-[#96959c]">
            {project.relationships.length} Key Ties Mapped
          </span>
        </div>
      </div>

      {/* Main Interactive Network Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Visual Hub Node Graph */}
        <div className="lg:col-span-7 bg-[#141416] border border-[#302f33] rounded-sm p-6 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
          
          {/* Subtle Radar Background Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#302f33_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[#C6A24D]/15 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[#C6A24D]/10 pointer-events-none" />

          {/* Top Label */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#8a763c]">
            <span className="font-serif font-semibold uppercase tracking-wider">Dynamic Character Topology</span>
            <span>Click any connection card below</span>
          </div>

          {/* Central Hub Container */}
          <div className="relative z-10 my-8 flex flex-col items-center justify-center">
            
            {/* Protagonist Central Node */}
            <div className="p-4 rounded-full bg-gradient-to-br from-[#202023] to-[#0A0A0B] border-2 border-[#C6A24D] shadow-[0_0_30px_rgba(198,162,77,0.35)] text-center max-w-[200px] animate-pulse-slow">
              <div className="w-10 h-10 mx-auto rounded-full bg-[#C6A24D]/20 border border-[#C6A24D]/60 flex items-center justify-center text-[#E8C878] mb-1">
                <User className="w-5 h-5" />
              </div>
              <span className="text-[10px] text-[#C6A24D] font-serif uppercase tracking-widest block font-bold">
                Protagonist Anchor
              </span>
              <h3 className="font-serif font-bold text-sm text-[#F1F0EC] truncate">
                {protagonist?.name}
              </h3>
            </div>
          </div>

          {/* Radiating Relationship Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.relationships.map((rel) => {
              const target = getTargetChar(rel);
              const isSelected = rel.id === selectedRel?.id;

              return (
                <button
                  key={rel.id}
                  onClick={() => setSelectedRelId(rel.id)}
                  className={`text-left p-3 rounded-sm border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#1B1B1E] border-[#C6A24D] shadow-[0_0_15px_rgba(198,162,77,0.2)]'
                      : 'bg-[#141416]/90 border-[#232326] hover:border-[#302f33] hover:bg-[#1B1B1E]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-serif font-bold text-[#F1F0EC]">
                      {target?.name}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                      rel.emotionalTension === 'High'
                        ? 'bg-rose-950/60 text-rose-300 border border-rose-800/50'
                        : 'bg-amber-950/60 text-amber-300 border border-amber-800/50'
                    }`}>
                      {rel.emotionalTension} Tension
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#E8C878]">
                    <Zap className="w-3 h-3" />
                    <span className="font-medium">{rel.relationType}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Relationship Deep Dive Panel */}
        <div className="lg:col-span-5 bg-[#141416] border border-[#302f33] rounded-sm p-6 space-y-5">
          {selectedRel ? (
            <>
              <div className="pb-4 border-b border-[#232326]">
                <div className="flex items-center gap-2 mb-1 text-xs text-[#8a763c]">
                  <span className="font-serif uppercase tracking-wider">Relationship Arc Analysis</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#F1F0EC] flex items-center gap-2">
                  <span>{getSourceChar(selectedRel)?.name}</span>
                  <span className="text-[#C6A24D]">↔</span>
                  <span>{getTargetChar(selectedRel)?.name}</span>
                </h3>
                <span className="inline-block mt-2 px-2.5 py-0.5 rounded bg-[#C6A24D]/15 text-[#E8C878] border border-[#C6A24D]/30 text-xs font-semibold">
                  {selectedRel.relationType}
                </span>
              </div>

              {/* Arc Summary */}
              <div className="space-y-2 p-4 bg-[#1B1B1E] border border-[#232326] rounded-sm text-xs">
                <span className="text-[10px] font-serif font-bold text-[#E8C878] uppercase tracking-wider block">
                  Interpersonal Arc Summary
                </span>
                <p className="text-[#F1F0EC]/90 leading-relaxed">
                  {selectedRel.arcSummary}
                </p>
              </div>

              {/* Key Turning Point */}
              <div className="space-y-2 p-4 bg-[#101012] border border-[#232326] rounded-sm text-xs">
                <span className="text-[10px] font-serif font-bold text-[#C6A24D] uppercase tracking-wider block flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-[#E8C878]" /> Pivotal Dramatic Turning Point
                </span>
                <p className="text-[#96959c] leading-relaxed italic">
                  "{selectedRel.keyTurningPoint}"
                </p>
              </div>

              {/* Directional Staging Tips */}
              <div className="p-4 bg-[#1B1B1E] border border-[#C6A24D]/30 rounded-sm text-xs space-y-1.5">
                <span className="text-[10px] font-serif font-bold text-[#E8C878] uppercase tracking-wider block">
                  Directorial Blocking Insight
                </span>
                <p className="text-[#96959c] leading-snug">
                  Frame confrontations with tight two-shots and shifting depth-of-field to emphasize the underlying psychological leverage between both characters.
                </p>
              </div>
            </>
          ) : (
            <div className="py-12 text-center text-[#96959c] text-xs">
              Select any relationship node to inspect the detailed dramatic arc.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
