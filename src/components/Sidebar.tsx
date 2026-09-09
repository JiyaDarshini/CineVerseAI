import React from 'react';
import {
  LayoutDashboard,
  Users,
  Sparkles,
  GitFork,
  Coins,
  MapPin,
  CalendarClock,
  HelpCircle,
  Cpu,
  Bot,
  Film
} from 'lucide-react';

export type TabType = 
  | 'dashboard'
  | 'characters'
  | 'casting'
  | 'relationships'
  | 'budget'
  | 'locations'
  | 'timeline'
  | 'simulator'
  | 'assistant';

interface SidebarProps {
  activeTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenAssistant: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  onOpenAssistant,
}) => {
  const navItems = [
    { id: 'dashboard' as TabType, label: 'Dashboard Home', icon: LayoutDashboard },
    { id: 'characters' as TabType, label: 'Character Intelligence', icon: Users },
    { id: 'casting' as TabType, label: 'Casting Studio', icon: Sparkles, badge: 'Signature' },
    { id: 'relationships' as TabType, label: 'Relationship Map', icon: GitFork },
    { id: 'budget' as TabType, label: 'Budget Intelligence', icon: Coins },
    { id: 'locations' as TabType, label: 'Locations & Scouting', icon: MapPin },
    { id: 'timeline' as TabType, label: 'Production Timeline', icon: CalendarClock },
    { id: 'simulator' as TabType, label: '"What If" Simulator', icon: Cpu, badge: 'AI Sim' },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-[#141416] via-[#101012] to-[#0A0A0B] border-r border-[#302f33] flex flex-col justify-between shrink-0 hidden md:flex min-h-[calc(100vh-4rem)]">
      {/* Navigation List */}
      <div className="p-3 space-y-1">
        <div className="px-3 py-2 text-[10px] uppercase font-bold text-[#8a763c] tracking-widest font-serif">
          Production Modules
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full text-left px-3 py-2.5 rounded-sm text-xs font-medium flex items-center justify-between transition-all duration-200 group ${
                isActive
                  ? 'bg-gradient-to-r from-[#C6A24D]/20 to-transparent text-[#E8C878] border-l-2 border-[#C6A24D] shadow-[inset_0_0_15px_rgba(198,162,77,0.1)]'
                  : 'text-[#96959c] hover:text-[#F1F0EC] hover:bg-[#1B1B1E]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-[#E8C878]' : 'text-[#6d6c72] group-hover:text-[#C6A24D]'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                  isActive
                    ? 'bg-[#C6A24D] text-[#0A0A0B]'
                    : 'bg-[#202023] text-[#8a763c] border border-[#C6A24D]/20'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Bottom Assistant Trigger Card */}
      <div className="p-3 border-t border-[#232326] space-y-2">
        <div className="bg-[#1B1B1E] border border-[#C6A24D]/30 rounded-sm p-3 relative overflow-hidden">
          <div className="flex items-center gap-2 text-[#E8C878] mb-1">
            <Bot className="w-4 h-4" />
            <span className="font-serif text-xs font-bold">CineVerse Assistant</span>
          </div>
          <p className="text-[11px] text-[#96959c] leading-snug mb-2.5">
            Ask questions grounded in this screenplay's characters, casting & budget.
          </p>
          <button
            onClick={onOpenAssistant}
            className="w-full py-1.5 px-2.5 rounded bg-[#202023] hover:bg-[#C6A24D]/20 text-[#E8C878] border border-[#C6A24D]/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open Assistant</span>
          </button>
        </div>

        <div className="px-2 text-[10px] text-[#6d6c72] flex items-center justify-between">
          <span>Multi-Agent Engine v2.4</span>
          <span className="flex items-center gap-1 text-[#8a763c]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Wiki
          </span>
        </div>
      </div>
    </aside>
  );
};
