import React, { useState, useEffect } from 'react';
import { MovieProject, UserProfile } from './types';
import { SAMPLE_PROJECTS } from './data/sampleProjects';
import { analyzeScreenplayScript } from './services/agentEngine';
import { saveProjectToNeon, fetchUserProjectsFromNeon, deleteProjectFromNeon, isNeonConfigured } from './services/neonService';

// Components
import { Navbar } from './components/Navbar';
import { Sidebar, TabType } from './components/Sidebar';
import { FilmSprocketStrip } from './components/FilmSprocketStrip';
import { PdfExportModal } from './components/PdfExportModal';

// Views
import { LandingView } from './views/LandingView';
import { AuthView } from './views/AuthView';
import { DashboardHomeView } from './views/DashboardHomeView';
import { CreateProjectModal } from './views/CreateProjectModal';
import { AnalysisLoadingView } from './views/AnalysisLoadingView';
import { CharactersView } from './views/CharactersView';
import { CastingStudioView } from './views/CastingStudioView';
import { RelationshipMapView } from './views/RelationshipMapView';
import { BudgetIntelligenceView } from './views/BudgetIntelligenceView';
import { LocationsView } from './views/LocationsView';
import { ProductionTimelineView } from './views/ProductionTimelineView';
import { WhatIfSimulatorView } from './views/WhatIfSimulatorView';
import { CineVerseAssistantModal } from './views/CineVerseAssistantModal';

import { Bot } from 'lucide-react';
import confetti from 'canvas-confetti';

export function App() {
  const [view, setView] = useState<'landing' | 'auth' | 'app'>('landing');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  
  // Projects state
  const [projects, setProjects] = useState<MovieProject[]>(SAMPLE_PROJECTS);
  const [activeProjectId, setActiveProjectId] = useState<string>(SAMPLE_PROJECTS[0].id);

  // User state - must login or register to access studio
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Modals & Floating Assistant
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  // Script Analysis Pipeline State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState({
    stageIndex: 0,
    progressPct: 0,
    currentStage: '',
    movieTitle: '',
  });

  const [initialCastingCharId, setInitialCastingCharId] = useState<string | undefined>(undefined);

  // Silent Background Sync with Neon DB on User Login
  useEffect(() => {
    if (currentUser?.id && isNeonConfigured()) {
      fetchUserProjectsFromNeon(currentUser.id).then((neonProjects) => {
        if (neonProjects && neonProjects.length > 0) {
          setProjects((prev) => {
            const combined = [...neonProjects, ...prev.filter((p) => !neonProjects.some((np) => np.id === p.id))];
            return combined;
          });
          setActiveProjectId(neonProjects[0].id);
        }
      });
    }
  }, [currentUser]);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  const handleDeleteProject = async (projectId: string) => {
    const updated = projects.filter((p) => p.id !== projectId);
    const nextProjects = updated.length > 0 ? updated : SAMPLE_PROJECTS;
    setProjects(nextProjects);

    // Switch active project if we deleted the currently active one
    if (activeProjectId === projectId) {
      setActiveProjectId(nextProjects[0].id);
    }

    // Persist deletion to Neon Postgres backend
    if (currentUser?.id && isNeonConfigured()) {
      try {
        await deleteProjectFromNeon(projectId);
      } catch (err) {
        console.error('Failed to delete project from Neon DB:', err);
      }
    }
  };

  const handleLaunchNewScriptAnalysis = async (metadata: any) => {
    setIsCreateModalOpen(false);
    setIsAnalyzing(true);
    setAnalysisProgress({
      stageIndex: 0,
      progressPct: 5,
      currentStage: 'Reading screenplay with multi-agent pipeline...',
      movieTitle: metadata.title,
    });

    try {
      const newProject = await analyzeScreenplayScript({
        ...metadata,
        onProgress: (stageIndex, progressPct, currentStage) => {
          setAnalysisProgress({
            stageIndex,
            progressPct,
            currentStage,
            movieTitle: metadata.title,
          });
        },
      });

      // Immediately switch to the new analyzed project in UI
      setProjects((prev) => [newProject, ...prev]);
      setActiveProjectId(newProject.id);
      setIsAnalyzing(false);
      setView('app');
      setActiveTab('dashboard');

      // Isolated background persistence to Neon Postgres
      if (currentUser?.id && isNeonConfigured()) {
        saveProjectToNeon(currentUser.id, newProject).catch((dbErr) => {
          console.warn('[Neon DB Background Sync]:', dbErr);
        });
      }

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C6A24D', '#E8C878', '#FFF2CC'],
      });
    } catch (err) {
      console.error('Error analyzing script:', err);
      setIsAnalyzing(false);
    }
  };

  const handleNavigateToCastingFromCharacters = (charId?: string) => {
    setInitialCastingCharId(charId);
    setActiveTab('casting');
  };

  // Render Landing View
  if (view === 'landing') {
    return (
      <LandingView
        onLogin={() => {
          setAuthMode('login');
          setView('auth');
        }}
        onRegister={() => {
          setAuthMode('register');
          setView('auth');
        }}
      />
    );
  }

  // Render Auth View
  if (view === 'auth') {
    return (
      <AuthView
        initialMode={authMode}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          setView('app');
          setActiveTab('dashboard');
        }}
        onBackToLanding={() => setView('landing')}
      />
    );
  }

  // Guard: if somehow user reaches app without logging in, redirect to auth
  if (!currentUser) {
    return (
      <AuthView
        initialMode="login"
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          setView('app');
          setActiveTab('dashboard');
        }}
        onBackToLanding={() => setView('landing')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F1F0EC] flex flex-col font-sans selection:bg-[#C6A24D]/30 selection:text-[#E8C878] app-ambient-glow">
      
      {/* Film Sprocket Strips */}
      <FilmSprocketStrip />

      {/* Global Navbar */}
      <Navbar
        currentProject={activeProject}
        projects={projects}
        onSelectProject={(id) => setActiveProjectId(id)}
        onDeleteProject={handleDeleteProject}
        onOpenCreateModal={() => setIsCreateModalOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        user={currentUser}
        onLogout={() => {
          setCurrentUser(null);
          setView('landing');
        }}
        activeTab={activeTab}
        onNavigateLanding={() => setView('landing')}
      />

      {/* Main Studio Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            setInitialCastingCharId(undefined);
          }}
          onOpenAssistant={() => setIsAssistantOpen(true)}
        />

        {/* Dynamic Center View Container */}
        <main className="flex-1 overflow-y-auto min-h-[calc(100vh-4rem)] pb-24 md:pb-12">
          {activeTab === 'dashboard' && (
            <DashboardHomeView
              project={activeProject}
              projects={projects}
              user={currentUser}
              onSelectTab={(tab) => {
                setActiveTab(tab);
                setInitialCastingCharId(undefined);
              }}
              onOpenCreateModal={() => setIsCreateModalOpen(true)}
              onOpenAssistant={() => setIsAssistantOpen(true)}
              onSelectProject={(id) => setActiveProjectId(id)}
              onDeleteProject={handleDeleteProject}
            />
          )}

          {activeTab === 'characters' && (
            <CharactersView
              project={activeProject}
              onNavigateToCasting={handleNavigateToCastingFromCharacters}
            />
          )}

          {activeTab === 'casting' && (
            <CastingStudioView
              project={activeProject}
              initialCharacterId={initialCastingCharId}
            />
          )}

          {activeTab === 'relationships' && (
            <RelationshipMapView
              project={activeProject}
              onNavigateToCharacter={(charId) => {
                setInitialCastingCharId(charId);
                setActiveTab('characters');
              }}
            />
          )}

          {activeTab === 'budget' && (
            <BudgetIntelligenceView project={activeProject} />
          )}

          {activeTab === 'locations' && (
            <LocationsView project={activeProject} />
          )}

          {activeTab === 'timeline' && (
            <ProductionTimelineView project={activeProject} />
          )}

          {activeTab === 'simulator' && (
            <WhatIfSimulatorView project={activeProject} />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#141416]/95 backdrop-blur-md border-t border-[#302f33] px-2 flex items-center justify-around z-30">
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`text-[10px] flex flex-col items-center gap-1 ${activeTab === 'dashboard' ? 'text-[#E8C878] font-bold' : 'text-[#96959c]'}`}
        >
          <span>Home</span>
        </button>
        <button
          onClick={() => setActiveTab('characters')}
          className={`text-[10px] flex flex-col items-center gap-1 ${activeTab === 'characters' ? 'text-[#E8C878] font-bold' : 'text-[#96959c]'}`}
        >
          <span>Characters</span>
        </button>
        <button
          onClick={() => setActiveTab('casting')}
          className={`text-[10px] flex flex-col items-center gap-1 ${activeTab === 'casting' ? 'text-[#E8C878] font-bold' : 'text-[#96959c]'}`}
        >
          <span>Casting</span>
        </button>
        <button
          onClick={() => setActiveTab('budget')}
          className={`text-[10px] flex flex-col items-center gap-1 ${activeTab === 'budget' ? 'text-[#E8C878] font-bold' : 'text-[#96959c]'}`}
        >
          <span>Budget</span>
        </button>
        <button
          onClick={() => setActiveTab('simulator')}
          className={`text-[10px] flex flex-col items-center gap-1 ${activeTab === 'simulator' ? 'text-[#E8C878] font-bold' : 'text-[#96959c]'}`}
        >
          <span>What If</span>
        </button>
      </div>

      {/* Floating CineVerse Assistant Action Trigger (Bottom Right) */}
      {!isAssistantOpen && (
        <button
          onClick={() => setIsAssistantOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-br from-[#202023] via-[#141416] to-[#0A0A0B] border border-[#C6A24D] shadow-[0_0_25px_rgba(198,162,77,0.4)] text-[#E8C878] hover:scale-110 hover:shadow-[0_0_35px_rgba(198,162,77,0.6)] transition-all group flex items-center gap-2"
          title="Open CineVerse Assistant"
        >
          <Bot className="w-5 h-5 animate-pulse" />
          <span className="text-xs font-serif font-bold pr-1 hidden sm:inline-block">
            CineVerse Assistant
          </span>
          <span className="w-2 h-2 rounded-full bg-[#C6A24D]" />
        </button>
      )}

      {/* Grounded Assistant Modal Drawer */}
      <CineVerseAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
        project={activeProject}
      />

      {/* Create Movie Project Modal */}
      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleLaunchNewScriptAnalysis}
      />

      {/* Export Deck Modal */}
      <PdfExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        project={activeProject}
      />

      {/* Multi-Agent Full Screen Analysis Loading Modal */}
      {isAnalyzing && (
        <AnalysisLoadingView
          movieTitle={analysisProgress.movieTitle}
          currentStageIndex={analysisProgress.stageIndex}
          progressPct={analysisProgress.progressPct}
        />
      )}
    </div>
  );
}

export default App;
