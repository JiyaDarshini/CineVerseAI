import React from 'react';
import { MovieProject } from '../types';
import { MapPin, Building, Trees, Video, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

interface LocationsViewProps {
  project: MovieProject;
}

export const LocationsView: React.FC<LocationsViewProps> = ({ project }) => {
  const { locations } = project;

  const totalScenes = locations.reduce((acc, l) => acc + l.sceneCount, 0);
  const totalDays = locations.reduce((acc, l) => acc + l.estimatedDays, 0);

  const getPermitBadge = (complexity: string) => {
    if (complexity.includes('Restricted') || complexity.includes('Intensive')) {
      return 'bg-rose-950/60 text-rose-300 border-rose-800/60';
    }
    if (complexity.includes('Moderate')) {
      return 'bg-amber-950/60 text-amber-300 border-amber-800/60';
    }
    return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60';
  };

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#302f33]">
        <div>
          <div className="flex items-center gap-2 text-[#8a763c] text-xs font-serif font-semibold tracking-wider uppercase mb-1">
            <MapPin className="w-4 h-4 text-[#C6A24D]" />
            <span>Location & Production Agent</span>
          </div>
          <h1 className="font-serif text-3xl font-black text-[#F1F0EC]">
            Location Breakdown & Scouting Matrix
          </h1>
          <p className="text-xs text-[#96959c] mt-1">
            Spatial logistics, indoor/outdoor categorization, and permit classifications for <strong className="text-[#E8C878] font-serif">{project.title}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="p-2.5 rounded bg-[#141416] border border-[#302f33] text-right">
            <span className="text-[10px] text-[#6d6c72] uppercase font-bold block">Total Locations</span>
            <span className="text-base font-bold text-[#E8C878] font-mono">{locations.length} Sites</span>
          </div>
          <div className="p-2.5 rounded bg-[#141416] border border-[#302f33] text-right">
            <span className="text-[10px] text-[#6d6c72] uppercase font-bold block">Estimated Shoot</span>
            <span className="text-base font-bold text-[#E8C878] font-mono">~{totalDays} Days ({totalScenes} Sc)</span>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-[#141416] border border-[#302f33] rounded-sm overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1B1B1E] border-b border-[#302f33] text-[#8a763c] font-serif uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3.5 px-4">Location Name & Environment</th>
                <th className="py-3.5 px-4">Type</th>
                <th className="py-3.5 px-4 text-center">Scene Count</th>
                <th className="py-3.5 px-4 text-center">Est. Days</th>
                <th className="py-3.5 px-4">Permit Classification</th>
                <th className="py-3.5 px-4">Production Notes & Real-World Alternatives</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#232326]">
              {locations.map((loc) => (
                <tr key={loc.id} className="hover:bg-[#1B1B1E]/60 transition-colors group">
                  
                  {/* Name & Setting */}
                  <td className="py-4 px-4 align-top max-w-xs">
                    <div className="font-serif font-bold text-sm text-[#F1F0EC] group-hover:text-[#E8C878] transition-colors">
                      {loc.name}
                    </div>
                    <p className="text-[11px] text-[#96959c] mt-1 leading-snug">
                      {loc.setting}
                    </p>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-4 align-top">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#101012] border border-[#232326] text-[#F1F0EC] text-[11px]">
                      {loc.type === 'Indoor' ? (
                        <Building className="w-3 h-3 text-[#C6A24D]" />
                      ) : loc.type === 'Outdoor' ? (
                        <Trees className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Video className="w-3 h-3 text-sky-400" />
                      )}
                      {loc.type}
                    </span>
                  </td>

                  {/* Scene Count */}
                  <td className="py-4 px-4 align-top text-center">
                    <span className="font-serif font-bold text-[#E8C878] font-mono text-sm">
                      {loc.sceneCount}
                    </span>
                  </td>

                  {/* Estimated Days */}
                  <td className="py-4 px-4 align-top text-center">
                    <span className="text-[#F1F0EC] font-mono">
                      {loc.estimatedDays} Days
                    </span>
                  </td>

                  {/* Permit Classification */}
                  <td className="py-4 px-4 align-top">
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold border ${getPermitBadge(loc.permitComplexity)}`}>
                      {loc.permitComplexity}
                    </span>
                  </td>

                  {/* Notes & Alternatives */}
                  <td className="py-4 px-4 align-top space-y-2 max-w-sm">
                    <p className="text-[#96959c] text-[11px] leading-relaxed">
                      {loc.notes}
                    </p>

                    {loc.realWorldAlternatives && loc.realWorldAlternatives.length > 0 && (
                      <div className="pt-1 text-[10px] space-y-0.5">
                        <span className="text-[#8a763c] font-semibold block uppercase tracking-wider">Scouting Alternatives:</span>
                        <div className="flex flex-wrap gap-1">
                          {loc.realWorldAlternatives.map((alt, aIdx) => (
                            <span key={aIdx} className="px-1.5 py-0.2 rounded bg-[#0A0A0B] text-[#F1F0EC]/80 border border-[#232326]">
                              {alt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Parallel Search Permit Assistant Card */}
      <div className="p-5 bg-[#141416] border border-[#C6A24D]/30 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded bg-[#C6A24D]/10 text-[#E8C878] border border-[#C6A24D]/30 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-sm text-[#F1F0EC]">Real-Time Location & Permit Intelligence</h4>
            <p className="text-xs text-[#96959c] mt-0.5 leading-relaxed">
              CineVerse automatically cross-references municipal filming clearance rules, ASI monument guidelines, and stage availability for your target production territory.
            </p>
          </div>
        </div>

        <span className="text-[10px] font-mono text-[#8a763c] px-2.5 py-1 rounded bg-[#1B1B1E] border border-[#232326] shrink-0">
          Scouting Engine: Verified
        </span>
      </div>
    </div>
  );
};
