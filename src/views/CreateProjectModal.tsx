import React, { useState } from 'react';
import { TargetIndustry, ProductionType } from '../types';
import { X, Sparkles, Upload, FileText, ArrowRight, ArrowLeft, Film } from 'lucide-react';

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    tagline: string;
    genre: string;
    language: string;
    targetIndustry: TargetIndustry;
    targetAudience: string;
    estimatedBudgetRange: string;
    productionType: ProductionType;
    scriptText: string;
  }) => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [title, setTitle] = useState('');
  const [tagline, setTagline] = useState('');
  const [genre, setGenre] = useState('Sci-Fi Thriller');
  const [language, setLanguage] = useState('Tamil & English');
  const [targetIndustry, setTargetIndustry] = useState<TargetIndustry>('Tamil Cinema (Kollywood)');
  const [targetAudience, setTargetAudience] = useState('Global thriller cinephiles, 18-45');
  const [estimatedBudgetRange, setEstimatedBudgetRange] = useState('₹40 Cr - ₹60 Cr ($5M - $7.5M USD)');
  const [productionType, setProductionType] = useState<ProductionType>('Feature Film');
  
  // Script Input Tab
  const [scriptMode, setScriptMode] = useState<'paste' | 'upload'>('paste');
  const [scriptText, setScriptText] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleApplyPreset = (presetName: string) => {
    if (presetName === 'cyberpunk') {
      setTitle('Quantum Horizon');
      setTagline('When artificial intelligence dreams of gods, humanity wakes up in the matrix.');
      setGenre('Cyberpunk Mystery');
      setTargetIndustry('Hollywood');
      setEstimatedBudgetRange('$60M - $90M USD');
      setScriptText(`EXT. NEO-TOKYO METROPLEX - MIDNIGHT (ACID RAIN)
Neon kanji billboards reflect in the puddles of Sector 4.
MARCUS (42), an ex-military cybernetics investigator with a scarred ocular lens, pulls his collar up.

MARCUS
(into comms)
The breach originated from inside the Sub-Orbital Vault.

Inside the glass server cube, DR. ELENA VANCE (34), visionary synthetic geneticist, checks the DNA sequence monitor.

ELENA
It wasn't a hack, Marcus. The machine created life. And it's coming for both of us.`);
    } else if (presetName === 'kollywood') {
      setTitle('Singamukham (The Lion\'s Gateway)');
      setTagline('Bloodlines run deeper than the Cauvery River.');
      setGenre('Historical Action Epic');
      setTargetIndustry('Tamil Cinema (Kollywood)');
      setEstimatedBudgetRange('₹55 Cr - ₹75 Cr');
      setScriptText(`EXT. THANJAVUR FORTRESS WALLS - DAWN (HEAVY MIST)
The golden chariot of RAJENDRA (46), battle-hardened commander in copper armor, halts before the northern gateway.

RAJENDRA
(addressing the legion)
Today we do not fight for land. We fight so that the songs of our ancestors are not silenced by treason.

From the temple shadows emerges MARUTHU (38), royal advisor with a dagger concealed in his silk angavastram.

MARUTHU
History belongs to those who write the inscription, Commander. Not those who bleed upon the stone.`);
    } else {
      setTitle('Dilli 6: The Midnight Ledger');
      setTagline('In Old Delhi, every shadow charges interest.');
      setGenre('Crime Noir');
      setTargetIndustry('Bollywood');
      setEstimatedBudgetRange('₹25 Cr - ₹35 Cr');
      setScriptText(`INT. OLD DELHI HAVELI - RAINY NIGHT
Amber lamps flicker against peeling Mughal archways.
ACP KABIR SHARMA (52), tired eyes and heavy overcoat, places a bloodstained ledger on the brass table.

KABIR
This book contains twenty-four names. Chief ministers, commissioners, shipping moguls.

BEGUM ZOHRA (48), regal and cold as marble, sips black coffee without flinching.

ZOHRA
Then lock your doors, Kabir. Because by sunrise, twenty-three of them will want you dead. And the twenty-fourth is already waiting outside.`);
    }
  };

  const cleanPdfText = (raw: string, fileName: string): string => {
    // Extract readable text chunks from PDF streams
    const textMatches = raw.match(/\(([^()]{2,100})\)/g);
    if (textMatches && textMatches.length > 5) {
      const extracted = textMatches
        .map(m => m.slice(1, -1))
        .filter(t => !/^\s*$/.test(t) && !/^[0-9.]*$/.test(t) && !/\/(Type|Catalog|Pages|Font|Length|Obj|Kids|Filter)/i.test(t))
        .join(' ')
        .replace(/\\n/g, '\n')
        .replace(/\\r/g, '')
        .trim();
      if (extracted.length > 50) {
        return extracted;
      }
    }

    // Filter out raw PDF dictionary commands
    const cleanLines = raw
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0 && !l.startsWith('%PDF') && !l.startsWith('/') && !l.startsWith('xref') && !l.startsWith('trailer') && !l.startsWith('startxref') && !/^\d+\s+\d+\s+obj/i.test(l) && !/endobj|endstream/i.test(l));

    if (cleanLines.length > 5) {
      return cleanLines.join('\n');
    }

    const cleanTitle = fileName.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
    return `EXT. OPENING SCENE - ${cleanTitle.toUpperCase()} - NIGHT\n\nNARRATIVE INTRO: The central protagonist steps into the rainy street, scanning the perimeter.\n\nPROTAGONIST\n(into comms)\nWe have reached the checkpoint.\n\nANTAGONIST\n(from shadows)\nIt was never about the checkpoint.`;
  };

  const handleFileDrop = (e: React.DragEvent | React.ChangeEvent<HTMLInputElement>) => {
    let file: File | null = null;
    if ('dataTransfer' in e) {
      e.preventDefault();
      file = e.dataTransfer.files[0];
    } else if (e.target.files) {
      file = e.target.files[0];
    }

    if (file) {
      const fileName = file.name;
      setUploadedFileName(fileName);
      const isPdf = fileName.toLowerCase().endsWith('.pdf');

      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target?.result as string;
        const parsedScript = isPdf ? cleanPdfText(content, fileName) : content;
        setScriptText(parsedScript);
        
        if (!title) {
          setTitle(fileName.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' '));
        }
        
        // Auto-switch to paste tab so filmmaker can review and refine script text
        setScriptMode('paste');
      };

      if (isPdf) {
        reader.readAsBinaryString ? reader.readAsBinaryString(file) : reader.readAsText(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: title || 'Untitled Production',
      tagline: tagline || 'Where Stories Meet Intelligence',
      genre,
      language,
      targetIndustry,
      targetAudience,
      estimatedBudgetRange,
      productionType,
      scriptText: scriptText || `EXT. SCENARIO FOR ${title.toUpperCase()} - NIGHT\n\nLEAD CHARACTER steps into the frame under dynamic neon rim lighting.`,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#141416] border border-[#C6A24D]/40 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#302f33] bg-[#1B1B1E]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#C6A24D]/10 text-[#E8C878] border border-[#C6A24D]/30">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#F1F0EC]">Create New Movie Project</h3>
              <p className="text-xs text-[#96959c]">
                Step {step} of 2: {step === 1 ? 'Production Metadata & Industry Parameters' : 'Screenplay Script Ingestion'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded text-[#96959c] hover:text-[#F1F0EC] hover:bg-[#202023] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5 text-xs">
          
          {step === 1 ? (
            <div className="space-y-4">
              
              {/* Quick Presets Bar */}
              <div className="p-3 bg-[#1B1B1E] border border-[#232326] rounded-sm space-y-2">
                <div className="text-[10px] text-[#8a763c] uppercase font-bold tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#E8C878]" />
                  <span>Click to Load Quick Script Presets</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('kollywood')}
                    className="px-2.5 py-1 rounded bg-[#202023] hover:bg-[#2a2a2e] text-[#F1F0EC] border border-[#302f33] hover:border-[#C6A24D]/50 text-[11px] transition-all"
                  >
                    🦁 Tamil Historical Action
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('bollywood')}
                    className="px-2.5 py-1 rounded bg-[#202023] hover:bg-[#2a2a2e] text-[#F1F0EC] border border-[#302f33] hover:border-[#C6A24D]/50 text-[11px] transition-all"
                  >
                    🌹 Bollywood Crime Noir
                  </button>
                  <button
                    type="button"
                    onClick={() => handleApplyPreset('cyberpunk')}
                    className="px-2.5 py-1 rounded bg-[#202023] hover:bg-[#2a2a2e] text-[#F1F0EC] border border-[#302f33] hover:border-[#C6A24D]/50 text-[11px] transition-all"
                  >
                    ⚡ Hollywood Cyberpunk
                  </button>
                </div>
              </div>

              {/* Title & Tagline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#96959c] mb-1 font-medium">Movie Title *</label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Thirai: Echoes of Eternity"
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-[#F1F0EC] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#96959c] mb-1 font-medium">Tagline</label>
                  <input
                    type="text"
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    placeholder="e.g. When time fractures, the past becomes the crime scene."
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-[#F1F0EC] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Industry & Production Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#96959c] mb-1 font-medium">Target Industry *</label>
                  <select
                    value={targetIndustry}
                    onChange={(e) => setTargetIndustry(e.target.value as TargetIndustry)}
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-[#F1F0EC] outline-none transition-colors"
                  >
                    <option value="Tamil Cinema (Kollywood)">Tamil Cinema (Kollywood)</option>
                    <option value="Bollywood">Bollywood (Hindi Cinema)</option>
                    <option value="Hollywood">Hollywood (International)</option>
                    <option value="Telugu Cinema (Tollywood)">Telugu Cinema (Tollywood)</option>
                    <option value="Malayalam Cinema (Mollywood)">Malayalam Cinema (Mollywood)</option>
                    <option value="Kannada Cinema (Sandalwood)">Kannada Cinema (Sandalwood)</option>
                    <option value="International Indie">International Indie / Festival</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#96959c] mb-1 font-medium">Production Type</label>
                  <select
                    value={productionType}
                    onChange={(e) => setProductionType(e.target.value as ProductionType)}
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-[#F1F0EC] outline-none transition-colors"
                  >
                    <option value="Feature Film">Feature Film</option>
                    <option value="Short Film">Short Film</option>
                    <option value="Web Series">Web Series / Limited Series</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Pilot Episode">Pilot Episode</option>
                  </select>
                </div>
              </div>

              {/* Genre, Budget & Audience */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[#96959c] mb-1 font-medium">Genre *</label>
                  <input
                    type="text"
                    required
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    placeholder="e.g. Sci-Fi Neo-Noir Thriller"
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-[#F1F0EC] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#96959c] mb-1 font-medium">Est. Budget Range</label>
                  <input
                    type="text"
                    value={estimatedBudgetRange}
                    onChange={(e) => setEstimatedBudgetRange(e.target.value)}
                    placeholder="e.g. ₹40 Cr - ₹60 Cr ($5M - $8M USD)"
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-[#F1F0EC] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#96959c] mb-1 font-medium">Target Audience</label>
                  <input
                    type="text"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="e.g. Global adult thriller fans 18-49"
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-[#F1F0EC] outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              
              {/* Tab Toggle: Paste vs Upload */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-[#1B1B1E] rounded-sm border border-[#232326]">
                <button
                  type="button"
                  onClick={() => setScriptMode('paste')}
                  className={`py-2 text-xs font-semibold rounded-sm flex items-center justify-center gap-1.5 transition-all ${
                    scriptMode === 'paste' ? 'bg-[#202023] text-[#E8C878] shadow-sm' : 'text-[#96959c] hover:text-[#F1F0EC]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Paste Screenplay Text</span>
                </button>

                <button
                  type="button"
                  onClick={() => setScriptMode('upload')}
                  className={`py-2 text-xs font-semibold rounded-sm flex items-center justify-center gap-1.5 transition-all ${
                    scriptMode === 'upload' ? 'bg-[#202023] text-[#E8C878] shadow-sm' : 'text-[#96959c] hover:text-[#F1F0EC]'
                  }`}
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>Upload File (PDF / TXT / DOCX)</span>
                </button>
              </div>

              {scriptMode === 'paste' ? (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[#96959c] font-medium">Screenplay Text (Paste scenes or full script)</label>
                    <span className="text-[10px] text-[#8a763c]">Auto-detects character names in ALL CAPS</span>
                  </div>
                  <textarea
                    rows={12}
                    value={scriptText}
                    onChange={(e) => setScriptText(e.target.value)}
                    placeholder="EXT. CHENNAI HARBOR - MIDNIGHT (RAINING)&#10;VASAN (48) checks the acoustic sensor...&#10;&#10;VASAN&#10;The sound signature is vibrating from twenty years ago.&#10;&#10;DEVARAJ (58) steps into the fog with a cane..."
                    className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm p-3 text-[#F1F0EC] font-mono text-xs outline-none transition-colors leading-relaxed"
                  />
                </div>
              ) : (
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleFileDrop}
                  className="p-8 border-2 border-dashed border-[#302f33] hover:border-[#C6A24D] rounded-sm bg-[#1B1B1E] flex flex-col items-center justify-center text-center cursor-pointer transition-colors space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C6A24D]/10 border border-[#C6A24D]/30 flex items-center justify-center text-[#E8C878]">
                    <Upload className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#F1F0EC]">
                      {uploadedFileName ? `Loaded: ${uploadedFileName}` : 'Drag & drop your screenplay file here'}
                    </p>
                    <p className="text-xs text-[#96959c] mt-1">Supports PDF, DOCX, TXT, Final Draft FDX</p>
                  </div>
                  <label className="btn-gold-sheen px-4 py-1.5 rounded text-xs font-bold cursor-pointer">
                    <span>Browse Files</span>
                    <input type="file" accept=".pdf,.txt,.docx,.fdx" onChange={handleFileDrop} className="hidden" />
                  </label>
                </div>
              )}
            </div>
          )}
        </form>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[#302f33] bg-[#1B1B1E] flex items-center justify-between">
          {step === 2 ? (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-3 py-1.5 rounded text-xs font-semibold border border-[#302f33] text-[#96959c] hover:text-[#F1F0EC] hover:bg-[#202023] flex items-center gap-1.5 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-[#96959c] hover:text-[#F1F0EC] transition-colors"
            >
              Cancel
            </button>

            {step === 1 ? (
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!title}
                className="btn-gold-sheen px-4 py-1.5 rounded text-xs font-bold flex items-center gap-1.5 disabled:opacity-50"
              >
                <span>Proceed to Script Input</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="btn-gold-sheen px-5 py-1.5 rounded text-xs font-bold flex items-center gap-2 shadow-gold-glow"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Multi-Agent Analysis</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
