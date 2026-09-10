import React, { useState } from 'react';
import { MovieProject, UserProfile } from '../types';
import { Film, ChevronDown, Plus, Download, LogOut, Trash2 } from 'lucide-react';

interface NavbarProps {
  currentProject: MovieProject;
  projects: MovieProject[];
  onSelectProject: (id: string) => void;
  onDeleteProject?: (id: string) => void;
  onOpenCreateModal: () => void;
  onOpenExportModal: () => void;
  user: UserProfile | null;
  onLogout: () => void;
  activeTab: string;
  onNavigateLanding: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentProject,
  projects,
  onSelectProject,
  onDeleteProject,
  onOpenCreateModal,
  onOpenExportModal,
  user,
  onLogout,
  onNavigateLanding,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-[#0A0A0B]/95 backdrop-blur-md border-b border-[#302f33] px-4 lg:px-8 flex items-center justify-between">
      {/* Brand & Tagline */}
      <div className="flex items-center gap-4">
        <button
          onClick={onNavigateLanding}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#202023] to-[#141416] border border-[#C6A24D]/50 flex items-center justify-center text-[#E8C878] group-hover:shadow-[0_0_15px_rgba(198,162,77,0.4)] transition-all">
            <Film className="w-5 h-5 text-[#E8C878]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-black text-lg tracking-wider text-[#F1F0EC]">
                Cine<span className="text-gold-sheen">Verse</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.2 rounded bg-[#C6A24D]/20 text-[#E8C878] border border-[#C6A24D]/30">
                AI
              </span>
            </div>
            <span className="text-[10px] text-[#8a763c] italic hidden sm:inline-block font-serif tracking-tight">
              Where Stories Meet Intelligence
            </span>
          </div>
        </button>

        {/* Project Switcher Dropdown */}
        <div className="relative ml-2 sm:ml-6">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1B1B1E] border border-[#302f33] hover:border-[#C6A24D]/60 text-xs font-medium text-[#F1F0EC] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#C6A24D] animate-pulse" />
            <span className="max-w-[140px] sm:max-w-[200px] truncate text-[#E8C878] font-serif font-semibold">
              {currentProject.title}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#96959c]" />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-80 bg-[#141416] border border-[#C6A24D]/40 rounded-sm shadow-2xl py-2 z-50 animate-fadeIn">
              <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-[#8a763c] tracking-wider border-b border-[#232326] flex items-center justify-between">
                <span>Switch Active Project</span>
                <span className="text-[9px] text-[#6d6c72] normal-case font-normal">{projects.length} Total</span>
              </div>
              <div className="max-h-64 overflow-y-auto py-1 divide-y divide-[#232326]/50">
                {projects.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProject(p.id);
                      setDropdownOpen(false);
                    }}
                    className={`group/proj w-full text-left px-3 py-2.5 text-xs flex items-center justify-between hover:bg-[#1B1B1E] cursor-pointer transition-colors ${
                      p.id === currentProject.id ? 'bg-[#C6A24D]/10 text-[#E8C878] font-medium' : 'text-[#F1F0EC]'
                    }`}
                  >
                    <div className="truncate mr-2 flex-1">
                      <div className="font-serif font-semibold truncate flex items-center gap-1.5">
                        <span className="truncate">{p.title}</span>
                        {p.id === currentProject.id && (
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#C6A24D]/20 text-[#E8C878] font-bold shrink-0">Active</span>
                        )}
                      </div>
                      <div className="text-[10px] text-[#96959c] truncate">{p.targetIndustry} • {p.genre}</div>
                    </div>

                    {onDeleteProject && (
                      <button
                        title="Delete Project"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm(`Are you sure you want to delete "${p.title}"?`)) {
                            onDeleteProject(p.id);
                          }
                        }}
                        className="opacity-40 group-hover/proj:opacity-100 hover:!opacity-100 p-1.5 rounded hover:bg-rose-500/20 text-[#96959c] hover:text-rose-400 transition-all shrink-0 ml-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-2 border-t border-[#232326]">
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    onOpenCreateModal();
                  }}
                  className="w-full py-1.5 px-3 rounded bg-[#202023] hover:bg-[#2a2a2e] text-[#E8C878] border border-[#C6A24D]/30 text-xs font-medium flex items-center justify-center gap-1.5 transition-all"
                >
                  <Plus className="w-3.5 h-3.5" /> + New Movie Project
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={onOpenExportModal}
          className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#F1F0EC] bg-[#1B1B1E] hover:bg-[#202023] border border-[#302f33] hover:border-[#C6A24D]/50 rounded transition-all"
        >
          <Download className="w-3.5 h-3.5 text-[#E8C878]" />
          <span>Export Pitch Deck</span>
        </button>

        <button
          onClick={onOpenCreateModal}
          className="btn-gold-sheen px-3.5 py-1.5 text-xs rounded font-bold flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">New Script</span>
        </button>

        {/* User Role Badge */}
        {user && (
          <div className="flex items-center gap-2 pl-2 border-l border-[#302f33]">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-xs font-medium text-[#F1F0EC]">{user.name}</span>
              <span className="text-[10px] text-[#C6A24D] font-serif uppercase tracking-wider">{user.role}</span>
            </div>
            <button
              onClick={onLogout}
              className="p-1.5 rounded text-[#96959c] hover:text-red-400 hover:bg-[#1B1B1E] transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
