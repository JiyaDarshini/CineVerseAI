import React from 'react';
import { FilmCameraSilhouette } from '../components/FilmCameraSilhouette';
import { FilmSprocketStrip } from '../components/FilmSprocketStrip';
import { Sparkles, Users, Coins, Bot, ArrowRight, Lock, UserPlus, CheckCircle2, ShieldCheck, Film } from 'lucide-react';

interface LandingViewProps {
  onLogin: () => void;
  onRegister: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  onLogin,
  onRegister,
}) => {
  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-[#F1F0EC] overflow-x-hidden app-ambient-glow">
      {/* Film Sprocket Border Strips */}
      <FilmSprocketStrip />

      {/* Hero Background Spotlight Glow Top Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#C6A24D]/10 via-[#C6A24D]/05 to-transparent blur-[120px] pointer-events-none" />

      {/* Conic Spotlight Beam Docked Right */}
      <div className="spotlight-beam absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-40" />

      {/* Top Navigation */}
      <header className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between border-b border-[#302f33]/40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#202023] to-[#141416] border border-[#C6A24D]/60 flex items-center justify-center text-[#E8C878] shadow-[0_0_20px_rgba(198,162,77,0.3)]">
            <Film className="w-6 h-6 text-[#E8C878]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-serif font-black text-xl tracking-wider text-[#F1F0EC]">
                Cine<span className="text-gold-sheen">Verse</span>
              </span>
              <span className="text-[10px] font-bold tracking-widest px-1.5 py-0.2 rounded bg-[#C6A24D]/20 text-[#E8C878] border border-[#C6A24D]/30">
                AI
              </span>
            </div>
            <span className="text-[10px] text-[#8a763c] italic font-serif">
              Where Stories Meet Intelligence
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onLogin}
            className="px-4 py-2 rounded text-xs font-semibold text-[#E8C878] hover:text-[#FFF] bg-[#141416] hover:bg-[#1B1B1E] border border-[#302f33] hover:border-[#C6A24D]/60 transition-all flex items-center gap-1.5"
          >
            <Lock className="w-3.5 h-3.5 text-[#C6A24D]" />
            <span>Sign In</span>
          </button>
          <button
            onClick={onRegister}
            className="btn-gold-sheen px-4 py-2 rounded text-xs font-bold flex items-center gap-1.5"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Create Account</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[520px]">
          
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1B1E] border border-[#C6A24D]/40 shadow-[0_0_15px_rgba(198,162,77,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#C6A24D] animate-ping" />
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-sheen font-serif">
                Production Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#F1F0EC] tracking-tight leading-[1.1]">
              Cine<span className="text-gold-sheen">Verse</span> AI
            </h1>

            {/* Italic Gold Tagline */}
            <p className="font-serif italic text-2xl sm:text-3xl text-[#E8C878] font-medium tracking-wide">
              "Where Stories Meet Intelligence."
            </p>

            {/* Value Proposition */}
            <p className="text-sm sm:text-base text-[#96959c] leading-relaxed max-w-xl font-normal">
              An agentic AI production-planning platform designed for directors, producers, and screenwriters. Upload or paste a screenplay; our multi-agent pipeline extracts deep character profiles, scores candidate casting with live Wikipedia biometric intelligence, graphs interpersonal tension, models department budgets, and builds dynamic shoot timelines.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onRegister}
                className="btn-gold-sheen px-6 py-3 rounded text-sm font-bold flex items-center gap-2 shadow-gold-glow"
              >
                <span>Register & Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLogin}
                className="px-6 py-3 rounded text-sm font-semibold bg-[#141416] hover:bg-[#1B1B1E] text-[#F1F0EC] border border-[#302f33] hover:border-[#C6A24D]/60 flex items-center gap-2 transition-all"
              >
                <Lock className="w-4 h-4 text-[#C6A24D]" />
                <span>Existing Member Sign In</span>
              </button>
            </div>

            {/* Security & Access Badge */}
            <div className="pt-4 flex items-center gap-4 text-xs text-[#6d6c72]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C6A24D]" />
                <span>Secure Studio Workspace Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C6A24D]" />
                <span>Authenticated Role Intelligence</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Camera Silhouette */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              <FilmCameraSilhouette size={340} />
            </div>
          </div>
        </div>

        {/* Hairline Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#302f33] to-transparent my-16" />

        {/* 4-Column Capability Strip */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F1F0EC]">
              Autonomous Multi-Agent Production Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#96959c]">
              Log in or register to orchestrate every screenplay through specialized intelligent agents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
            
            {/* 1. Character Intelligence */}
            <div className="stat-card-gold p-5 space-y-3 cine-card">
              <div className="w-10 h-10 rounded bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center text-[#E8C878]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#F1F0EC]">Character Intelligence</h3>
              <p className="text-xs text-[#96959c] leading-relaxed">
                Extracts complete psychological dossiers, emotional arcs, age brackets, and distinct casting requirements for every named character.
              </p>
            </div>

            {/* 2. Casting Studio */}
            <div className="stat-card-gold p-5 space-y-3 cine-card">
              <div className="w-10 h-10 rounded bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center text-[#E8C878]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif font-bold text-base text-[#F1F0EC]">Casting Studio</h3>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#C6A24D] text-[#0A0A0B]">SIGNATURE</span>
              </div>
              <p className="text-xs text-[#96959c] leading-relaxed">
                Top 5 ranked actors with live Wikipedia photos and bios, weighted match breakdown across 7 dimensions, and head-to-head comparison.
              </p>
            </div>

            {/* 3. Production Intelligence */}
            <div className="stat-card-gold p-5 space-y-3 cine-card">
              <div className="w-10 h-10 rounded bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center text-[#E8C878]">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#F1F0EC]">Production & Budget</h3>
              <p className="text-xs text-[#96959c] leading-relaxed">
                Calculates department allocations, location scouting matrices, permit classifications, and production timelines with risk flags.
              </p>
            </div>

            {/* 4. CineVerse Assistant */}
            <div className="stat-card-gold p-5 space-y-3 cine-card">
              <div className="w-10 h-10 rounded bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center text-[#E8C878]">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-base text-[#F1F0EC]">CineVerse Assistant</h3>
              <p className="text-xs text-[#96959c] leading-relaxed">
                A project-grounded conversational agent answering deep questions on scene expenses, casting logic, and "What If" production pivots.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[#302f33] py-8 text-center text-xs text-[#6d6c72]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-[#F1F0EC]">CineVerse AI</span>
            <span>—</span>
            <span className="italic text-[#8a763c]">Where Stories Meet Intelligence.</span>
          </div>
          <div>
            Built with React, Tailwind CSS, Google Multi-Agent Architecture & Live Wikipedia Integration.
          </div>
        </div>
      </footer>
    </div>
  );
};
