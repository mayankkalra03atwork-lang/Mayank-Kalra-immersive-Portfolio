import React, { useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Interactive3DDeviceViewer } from './components/3d/Interactive3DDeviceViewer';
import { SelectedWork } from './components/SelectedWork';
import { HireMeBanner } from './components/HireMeBanner';
import { DesignerWhoCanBuild } from './components/DesignerWhoCanBuild';
import { AiLeverageSection } from './components/AiLeverageSection';
import { ProcessSection } from './components/ProcessSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { ResumeModal } from './components/ResumeModal';
import { RecruiterSnapshotModal } from './components/RecruiterSnapshotModal';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  const handleSelectProjectById = (projectId: string) => {
    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === projectId);
    if (proj) {
      setSelectedProject(proj);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-amber-400 selection:text-black">
      {/* Subtle Desktop Cursor */}
      <CustomCursor />

      {/* Top Bar Contract Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        onOpenRecruiter={() => setRecruiterOpen(true)}
      />

      {/* Main Page Stream */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section with Interactive 3D Spatial Geometry */}
        <Hero onOpenRecruiter={() => setRecruiterOpen(true)} />

        {/* Interactive 3D Device & Project Inspection Studio */}
        <Interactive3DDeviceViewer
          onOpenCaseStudy={(proj) => setSelectedProject(proj)}
        />

        {/* 01 Selected Work */}
        <SelectedWork onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* Why Hire Mayank? Conversion Magnet */}
        <HireMeBanner
          onOpenResume={() => setResumeOpen(true)}
          onOpenRecruiter={() => setRecruiterOpen(true)}
        />

        {/* 02 The Builder Difference */}
        <DesignerWhoCanBuild />

        {/* 03 AI as Leverage */}
        <AiLeverageSection />

        {/* 04 How I Work Process */}
        <ProcessSection />

        {/* 05 Categorized Skills & Capabilities */}
        <SkillsSection />

        {/* 06 About, Experience & Education */}
        <AboutSection onOpenResume={() => setResumeOpen(true)} />

        {/* 07 Contact & Resume Short Version */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      <RecruiterSnapshotModal
        isOpen={recruiterOpen}
        onClose={() => setRecruiterOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
        onSelectProject={handleSelectProjectById}
      />
    </div>
  );
}
