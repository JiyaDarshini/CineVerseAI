import { jsPDF } from 'jspdf';
import { MovieProject } from '../types';

/**
 * Generates and downloads a complete, highly structured Black and White (B&W)
 * executive production intelligence PDF document for the project.
 */
export function generateBlackAndWhitePdf(project: MovieProject): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper to check page boundary and auto-add page with running header/footer
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 10) {
      doc.addPage();
      y = margin + 8;
      renderRunningHeader();
    }
  };

  const renderRunningHeader = () => {
    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(80, 80, 80);
    doc.text(`CINEVERSE AI — OVERALL PRODUCTION INTELLIGENCE REPORT | ${project.title.toUpperCase()}`, margin, margin);
    doc.setDrawColor(180, 180, 180);
    doc.setLineWidth(0.2);
    doc.line(margin, margin + 2, margin + contentWidth, margin + 2);
    y = margin + 8;
  };

  const renderSectionHeader = (title: string, sectionNumber: number) => {
    checkPageBreak(16);
    y += 4;
    doc.setFont('times', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`${sectionNumber}. ${title.toUpperCase()}`, margin, y);
    y += 2;
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + contentWidth, y);
    y += 5;
  };

  const renderSubHeader = (title: string) => {
    checkPageBreak(10);
    doc.setFont('times', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(30, 30, 30);
    doc.text(title, margin, y);
    y += 4.5;
  };

  const renderParagraph = (label: string, content: string) => {
    doc.setFont('times', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    
    const labelWidth = doc.getTextWidth(label + ': ');
    const lines = doc.splitTextToSize(content, contentWidth - labelWidth);
    
    checkPageBreak(lines.length * 4.2 + 3);
    
    doc.text(label + ': ', margin, y);
    doc.setFont('times', 'normal');
    doc.setTextColor(40, 40, 40);
    
    if (lines.length > 0) {
      doc.text(lines[0], margin + labelWidth, y);
      for (let i = 1; i < lines.length; i++) {
        y += 4.2;
        doc.text(lines[i], margin, y);
      }
    }
    y += 5;
  };

  // ==========================================
  // 1. EXECUTIVE TITLE / COVER HEADER
  // ==========================================
  doc.setFont('times', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(60, 60, 60);
  doc.text('CINEVERSE AI | PRODUCTION INTELLIGENCE PLATFORM', margin, y);
  y += 4;

  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(1);
  doc.line(margin, y, margin + contentWidth, y);
  y += 6;

  doc.setFont('times', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text(project.title.toUpperCase(), margin, y);
  y += 6;

  doc.setFont('times', 'italic');
  doc.setFontSize(10);
  doc.setTextColor(50, 50, 50);
  doc.text(`"${project.tagline}"`, margin, y);
  y += 6;

  // Metadata Box (Black & White Table Box)
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.3);
  doc.rect(margin, y, contentWidth, 14);

  doc.setFont('times', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(0, 0, 0);
  doc.text(`Industry: ${project.targetIndustry}`, margin + 3, y + 5);
  doc.text(`Genre: ${project.genre}`, margin + 65, y + 5);
  doc.text(`Production Type: ${project.productionType}`, margin + 125, y + 5);

  doc.text(`Estimated Scale: $${(project.budget.totalEstimatedBudgetUsd / 1000000).toFixed(1)}M USD (${project.budget.scaleBadge})`, margin + 3, y + 10);
  doc.text(`Timeline: ${project.timeline.totalWeeks} Weeks (Index ${project.timeline.complexityScore}/100)`, margin + 65, y + 10);
  doc.text(`Report Date: ${new Date().toLocaleDateString()}`, margin + 125, y + 10);
  y += 18;

  // ==========================================
  // 2. EXECUTIVE STORY ANALYSIS
  // ==========================================
  renderSectionHeader('Executive Story Analysis & Narrative Architecture', 1);

  renderParagraph('Logline', project.storyAnalysis.logline);
  renderParagraph('Synopsis', project.storyAnalysis.synopsis);
  renderParagraph('Thematic Core', project.storyAnalysis.themes.join(' • '));
  renderParagraph('Emotional Tone', project.storyAnalysis.emotionalTone);
  renderParagraph('Pacing & Structure', project.storyAnalysis.pacing);
  renderParagraph('Target Audience', project.storyAnalysis.targetAudience);
  renderParagraph('Market Potential', project.storyAnalysis.marketPotential);

  // ==========================================
  // 3. CHARACTER INTELLIGENCE & CASTING ROSTER
  // ==========================================
  renderSectionHeader('Character Intelligence Dossiers & Casting Roster', 2);

  project.characters.forEach((char, cIdx) => {
    checkPageBreak(30);
    renderSubHeader(`2.${cIdx + 1} ${char.name.toUpperCase()} (${char.role.toUpperCase()} — AGE ${char.ageRange})`);
    
    renderParagraph('Archetype', char.archetype);
    renderParagraph('Personality Traits', char.personalityTraits.join(', '));
    renderParagraph('Core Motivation', char.motivation);
    renderParagraph('Casting Specifications', char.castingRequirements);
    renderParagraph('Character Journey Arc', char.characterJourney);
    renderParagraph('Estimated Scene Presence', `~${char.sceneCountEstimated} scenes (Intensity: ${char.emotionalArcIntensity})`);

    // Top Candidate Actors Table
    checkPageBreak(25);
    doc.setFont('times', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(0, 0, 0);
    doc.text(`Ranked Casting Recommendations for ${char.name}:`, margin, y);
    y += 3.5;

    // Table Header
    doc.setFillColor(235, 235, 235);
    doc.rect(margin, y, contentWidth, 5, 'F');
    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.2);
    doc.rect(margin, y, contentWidth, 5, 'S');

    doc.setFont('times', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(0, 0, 0);
    doc.text('RANK', margin + 2, y + 3.5);
    doc.text('ACTOR CANDIDATE', margin + 14, y + 3.5);
    doc.text('MATCH %', margin + 58, y + 3.5);
    doc.text('EXPERIENCE TIER', margin + 78, y + 3.5);
    doc.text('BUDGET IMPACT', margin + 115, y + 3.5);
    doc.text('RUBRIC (STYLE/AGE/GENRE/RANGE/ROLES/PRES)', margin + 145, y + 3.5);
    y += 5;

    char.recommendations.forEach((rec) => {
      checkPageBreak(12);
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.1);
      doc.rect(margin, y, contentWidth, 5, 'S');

      doc.setFont('times', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(0, 0, 0);
      doc.text(`#${rec.rank}`, margin + 2, y + 3.5);
      
      doc.setFont('times', 'bold');
      doc.text(rec.name, margin + 14, y + 3.5);
      
      doc.setFont('times', 'normal');
      doc.text(`${rec.matchPercentage}%`, margin + 58, y + 3.5);
      doc.text(rec.experienceLevel, margin + 78, y + 3.5);
      doc.text(rec.budgetImpact, margin + 115, y + 3.5);
      doc.text(
        `${rec.rubric.actingStyleMatch}/${rec.rubric.ageAppearance}/${rec.rubric.genreExperience}/${rec.rubric.emotionalRange}/${rec.rubric.previousRoleSimilarity}/${rec.rubric.screenPresence}`,
        margin + 145,
        y + 3.5
      );
      y += 5;

      // Reasoning snippet
      checkPageBreak(8);
      doc.setFont('times', 'italic');
      doc.setFontSize(7);
      doc.setTextColor(60, 60, 60);
      const reasoningLines = doc.splitTextToSize(`Reasoning: ${rec.reasoning}`, contentWidth - 4);
      doc.text(reasoningLines, margin + 2, y + 3);
      y += reasoningLines.length * 3 + 2;
    });

    y += 3;
  });

  // ==========================================
  // 4. RELATIONSHIP NETWORK
  // ==========================================
  renderSectionHeader('Interpersonal Character Relationship Network', 3);

  project.relationships.forEach((rel, rIdx) => {
    checkPageBreak(18);
    const sourceChar = project.characters.find((c) => c.id === rel.fromCharacterId)?.name || 'Lead';
    const targetChar = project.characters.find((c) => c.id === rel.toCharacterId)?.name || 'Character';

    renderSubHeader(`3.${rIdx + 1} ${sourceChar.toUpperCase()} <—> ${targetChar.toUpperCase()} (${rel.relationType})`);
    renderParagraph('Emotional Tension', `${rel.emotionalTension} Tension`);
    renderParagraph('Dynamic Arc Summary', rel.arcSummary);
    renderParagraph('Key Dramatic Turning Point', `"${rel.keyTurningPoint}"`);
    y += 2;
  });

  // ==========================================
  // 5. BUDGET INTELLIGENCE & ALLOCATIONS
  // ==========================================
  renderSectionHeader('Departmental Budget Intelligence & Capital Allocation', 4);

  renderParagraph('Total Estimated Baseline Scale', `$${(project.budget.totalEstimatedBudgetUsd / 1000000).toFixed(2)}M USD (${project.budget.scaleBadge} Intensity)`);
  renderParagraph('Production Complexity Analysis', project.budget.complexityParagraph);

  // Budget Table
  checkPageBreak(35);
  doc.setFillColor(235, 235, 235);
  doc.rect(margin, y, contentWidth, 5, 'F');
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.2);
  doc.rect(margin, y, contentWidth, 5, 'S');

  doc.setFont('times', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(0, 0, 0);
  doc.text('DEPARTMENT / CATEGORY', margin + 2, y + 3.5);
  doc.text('ALLOCATION %', margin + 70, y + 3.5);
  doc.text('ESTIMATED (USD)', margin + 100, y + 3.5);
  doc.text('COST INTENSITY', margin + 135, y + 3.5);
  y += 5;

  project.budget.items.forEach((item) => {
    checkPageBreak(10);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.1);
    doc.rect(margin, y, contentWidth, 5, 'S');

    doc.setFont('times', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(0, 0, 0);
    doc.text(item.category, margin + 2, y + 3.5);

    doc.setFont('times', 'normal');
    doc.text(`${item.percentage}%`, margin + 70, y + 3.5);
    doc.text(`$${(item.estimatedAmountUsd / 1000).toLocaleString()}k`, margin + 100, y + 3.5);
    doc.text(item.scaleLevel, margin + 135, y + 3.5);
    y += 5;

    checkPageBreak(6);
    doc.setFont('times', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(70, 70, 70);
    const descLines = doc.splitTextToSize(`Drivers: ${item.costDrivers.join(', ')} — ${item.description}`, contentWidth - 4);
    doc.text(descLines, margin + 2, y + 2.8);
    y += descLines.length * 2.8 + 1.5;
  });
  y += 3;

  // ==========================================
  // 6. LOCATIONS & SCOUTING MATRIX
  // ==========================================
  renderSectionHeader('Spatial Logistics & Location Scouting Matrix', 5);

  checkPageBreak(30);
  doc.setFillColor(235, 235, 235);
  doc.rect(margin, y, contentWidth, 5, 'F');
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.2);
  doc.rect(margin, y, contentWidth, 5, 'S');

  doc.setFont('times', 'bold');
  doc.setFontSize(7.5);
  doc.setTextColor(0, 0, 0);
  doc.text('LOCATION / ENVIRONMENT', margin + 2, y + 3.5);
  doc.text('TYPE', margin + 65, y + 3.5);
  doc.text('SCENES', margin + 85, y + 3.5);
  doc.text('DAYS', margin + 102, y + 3.5);
  doc.text('PERMIT CLASSIFICATION', margin + 120, y + 3.5);
  y += 5;

  project.locations.forEach((loc) => {
    checkPageBreak(12);
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.1);
    doc.rect(margin, y, contentWidth, 5, 'S');

    doc.setFont('times', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(0, 0, 0);
    doc.text(loc.name, margin + 2, y + 3.5);

    doc.setFont('times', 'normal');
    doc.text(loc.type, margin + 65, y + 3.5);
    doc.text(`${loc.sceneCount} Sc`, margin + 85, y + 3.5);
    doc.text(`${loc.estimatedDays} Days`, margin + 102, y + 3.5);
    doc.text(loc.permitComplexity, margin + 120, y + 3.5);
    y += 5;

    checkPageBreak(7);
    doc.setFont('times', 'normal');
    doc.setFontSize(6.8);
    doc.setTextColor(70, 70, 70);
    const locLines = doc.splitTextToSize(`Notes: ${loc.notes} | Alternatives: ${loc.realWorldAlternatives.join(', ')}`, contentWidth - 4);
    doc.text(locLines, margin + 2, y + 2.8);
    y += locLines.length * 2.8 + 1.5;
  });
  y += 3;

  // ==========================================
  // 7. PRODUCTION TIMELINE & HIGH-COST FLAGS
  // ==========================================
  renderSectionHeader('Production Milestone Schedule & Risk Management', 6);

  renderParagraph('Total Production Schedule', `${project.timeline.totalWeeks} Weeks (~${Math.round(project.timeline.totalWeeks / 4.3)} Months)`);
  renderParagraph('Overall Complexity Index', `${project.timeline.complexityScore}/100 (${project.timeline.complexityBadge})`);

  // Phases
  project.timeline.phases.forEach((ph) => {
    checkPageBreak(14);
    renderSubHeader(`Phase: ${ph.phase} (${ph.durationWeeks} Weeks)`);
    renderParagraph('Key Deliverables', ph.keyMilestones.join(' • '));
    if (ph.criticalRisks && ph.criticalRisks.length > 0) {
      renderParagraph('Critical Phase Risks', ph.criticalRisks.join(' • '));
    }
  });

  // High Cost Flags
  checkPageBreak(20);
  doc.setFont('times', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text('High-Cost Scene Flags & AI Mitigation Strategies:', margin, y);
  y += 4;

  project.timeline.highCostFlags.forEach((flag, fIdx) => {
    checkPageBreak(12);
    renderParagraph(`Flag #${fIdx + 1} (${flag.reason} — ${flag.costImpact} Risk)`, flag.sceneDescription);
    renderParagraph('Mitigation Strategy', flag.mitigationSuggestion);
    y += 1;
  });

  // ==========================================
  // 8. AUTONOMOUS AI INSIGHTS
  // ==========================================
  renderSectionHeader('Autonomous AI Production Observations & Recommendations', 7);

  project.aiInsights.forEach((ins, idx) => {
    checkPageBreak(8);
    renderParagraph(`Observation ${idx + 1}`, ins);
  });

  // ==========================================
  // 9. RESPONSIBLE AI & LEGAL DISCLAIMERS
  // ==========================================
  renderSectionHeader('Legal Notices & Responsible AI Attributions', 8);

  renderParagraph(
    'Disclaimer & Methodology',
    'This report is generated by CineVerse AI using multi-agent narrative analysis models. All casting match scores, budget allocations, location scouting assessments, and timeline schedules are preliminary algorithmic estimates. Real actor headshots and biographical references are sourced from the Wikipedia REST API (CC BY-SA). All final creative, contractual, and casting commitments must be independently verified by filmmakers and producers.'
  );

  // ==========================================
  // PAGE NUMBERING ON ALL PAGES
  // ==========================================
  const totalPages = doc.internal.pages.length - 1;
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('times', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    
    // Bottom border rule
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.2);
    doc.line(margin, pageHeight - margin + 2, margin + contentWidth, pageHeight - margin + 2);
    
    doc.text(`CineVerse AI — Confidential Production Document`, margin, pageHeight - margin + 6);
    doc.text(`Page ${p} of ${totalPages}`, margin + contentWidth - 16, pageHeight - margin + 6);
  }

  // Save the PDF file
  const sanitizedTitle = project.title.replace(/[^a-zA-Z0-9_-]/g, '_');
  doc.save(`${sanitizedTitle}_Overall_Production_Analysis_CineVerse.pdf`);
}
