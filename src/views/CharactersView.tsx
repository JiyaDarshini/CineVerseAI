import React, { useState } from 'react';
import { MovieProject, CharacterProfile } from '../types';
import { Users, Sparkles, ArrowRight, Shield, Heart, Compass, Target, BookOpen } from 'lucide-react';

interface CharactersViewProps {
  project: MovieProject;
  onNavigateToCasting: (characterId?: string) => void;
}

export const CharactersView: React.FC<CharactersViewProps> = ({
  project,
  onNavigateToCasting,
}) => {
  const [selectedCharId, setSelectedCharId] = useState<string>(
    project.characters[0]?.id || ''
  );

  const selectedChar =
    project.characters.find((c) => c.id === selectedCharId) ||
    project.characters[0];

  if (!selectedChar) {
    return (
      <div className="p-8 text-center text-[#96959c]">
        No characters detected in current screenplay.
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <Users className="w-4 h-4 text-[#C6A24D]" />
            <span>Character Intelligence Agent</span>
          </div>
          <h1 className="font-serif text-3xl font-black text-[#F1F0EC]">
            Detected Character Dossiers
          </h1>
          <p className="text-xs text-[#96959c] mt-1">
            {project.characters.length} named entities extracted from <span className="text-[#E8C878] font-serif">{project.title}</span>
          </p>
        </div>

        <button
          onClick={() => onNavigateToCasting(selectedChar.id)}
          className="btn-gold-sheen px-4 py-2 rounded text-xs font-bold flex items-center gap-2 self-start sm:self-auto"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Open in Casting Studio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Two-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
        
        {/* Left Rail: Characters List */}
        <div className="lg:col-span-4 bg-[#141416] border border-[#302f33] rounded-sm p-3 space-y-2 h-fit">
          <div className="px-3 py-2 text-[10px] uppercase font-bold text-[#8a763c] tracking-wider font-serif">
            Character Roster ({project.characters.length})
          </div>

          <div className="space-y-1.5">
            {project.characters.map((char) => {
              const isSelected = char.id === selectedChar.id;
              return (
                <button
                  key={char.id}
                  onClick={() => setSelectedCharId(char.id)}
                  className={`w-full text-left p-3 rounded-sm border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#1B1B1E] border-[#C6A24D] shadow-[0_0_15px_rgba(198,162,77,0.15)]'
                      : 'bg-[#141416] border-[#232326] hover:border-[#302f33] hover:bg-[#1B1B1E]'
                  }`}
                >
                  <div className="space-y-1 truncate mr-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-serif font-bold text-sm ${isSelected ? 'text-[#E8C878]' : 'text-[#F1F0EC] group-hover:text-[#E8C878]'}`}>
                        {char.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[#96959c]">
                      <span className="px-1.5 py-0.2 rounded bg-[#0A0A0B] border border-[#232326] text-[#E8C878]">
                        {char.role}
                      </span>
                      <span>Age {char.ageRange}</span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-[#8a763c] font-mono block">
                      ~{char.sceneCountEstimated} Sc
                    </span>
                    <span className="text-[9px] text-[#6d6c72]">
                      {char.recommendations.length} Cast
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Detail Panel */}
        <div className="lg:col-span-8 bg-[#141416] border border-[#302f33] rounded-sm p-6 sm:p-8 space-y-6">
          
          {/* Top Banner */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#232326]">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded bg-[#C6A24D]/15 text-[#E8C878] border border-[#C6A24D]/30 text-xs font-serif font-bold uppercase tracking-wider">
                  {selectedChar.role}
                </span>
                <span className="text-xs text-[#96959c]">
                  Age {selectedChar.ageRange} • {selectedChar.gender}
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-[#F1F0EC]">
                {selectedChar.name}
              </h2>
              <p className="text-xs text-[#8a763c] mt-1 font-serif italic">
                Archetype: {selectedChar.archetype}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="px-3 py-2 rounded bg-[#1B1B1E] border border-[#232326] text-right">
                <span className="text-[10px] text-[#6d6c72] block uppercase tracking-wider">Estimated Presence</span>
                <span className="text-sm font-bold text-[#E8C878] font-mono">{selectedChar.sceneCountEstimated} Scenes</span>
              </div>
            </div>
          </div>

          {/* Trait Pills */}
          <div className="space-y-2">
            <span className="text-xs font-serif font-bold text-[#8a763c] uppercase tracking-wider flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-[#C6A24D]" /> Key Personality Traits
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedChar.personalityTraits.map((trait, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded bg-[#1B1B1E] border border-[#302f33] text-xs text-[#F1F0EC] font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/* Motivation & Core Drive */}
          <div className="space-y-2 p-4 bg-[#1B1B1E] border border-[#232326] rounded-sm">
            <span className="text-xs font-serif font-bold text-[#E8C878] uppercase tracking-wider flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-[#C6A24D]" /> Core Narrative Motivation
            </span>
            <p className="text-xs sm:text-sm text-[#F1F0EC]/90 leading-relaxed">
              {selectedChar.motivation}
            </p>
          </div>

          {/* Casting Requirements */}
          <div className="space-y-2 p-4 bg-[#1B1B1E] border border-[#232326] rounded-sm">
            <span className="text-xs font-serif font-bold text-[#E8C878] uppercase tracking-wider flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#C6A24D]" /> Casting Director Specifications
            </span>
            <p className="text-xs sm:text-sm text-[#96959c] leading-relaxed">
              {selectedChar.castingRequirements}
            </p>
          </div>

          {/* Character Journey Paragraph */}
          <div className="space-y-2">
            <span className="text-xs font-serif font-bold text-[#8a763c] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#C6A24D]" /> Dramatic Arc & Character Journey
            </span>
            <p className="text-xs sm:text-sm text-[#F1F0EC]/90 leading-relaxed italic bg-[#101012] p-4 rounded border border-[#232326]">
              "{selectedChar.characterJourney}"
            </p>
          </div>

          {/* Quick Preview of Top 3 Casting Matches */}
          <div className="pt-4 border-t border-[#232326] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-serif font-bold text-[#E8C878] uppercase tracking-wider">
                Top Casting Matches Preview
              </span>
              <button
                onClick={() => onNavigateToCasting(selectedChar.id)}
                className="text-xs text-[#C6A24D] hover:text-[#E8C878] flex items-center gap-1 font-semibold transition-colors"
              >
                View in Casting Studio <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {selectedChar.recommendations.slice(0, 3).map((rec) => (
                <div
                  key={rec.id}
                  onClick={() => onNavigateToCasting(selectedChar.id)}
                  className="p-3 bg-[#1B1B1E] border border-[#232326] hover:border-[#C6A24D]/60 rounded-sm cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-serif font-bold text-[#F1F0EC]">{rec.name}</span>
                    <span className="text-[10px] text-[#E8C878] font-bold">#{rec.rank}</span>
                  </div>
                  <div className="text-[10px] text-[#8a763c]">{rec.matchPercentage}% Weighted Fit</div>
                  <div className="text-[10px] text-[#96959c] mt-1 line-clamp-1">{rec.reasoning}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
