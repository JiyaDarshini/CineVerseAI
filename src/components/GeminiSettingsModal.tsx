import React, { useState, useEffect } from 'react';
import { getGeminiApiKey, setGeminiApiKey, isGeminiConfigured } from '../services/geminiService';
import { X, Sparkles, Key, Check, ShieldCheck, ExternalLink, Trash2 } from 'lucide-react';

interface GeminiSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onKeyUpdated: () => void;
}

export const GeminiSettingsModal: React.FC<GeminiSettingsModalProps> = ({
  isOpen,
  onClose,
  onKeyUpdated,
}) => {
  const [apiKey, setApiKey] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setApiKey(getGeminiApiKey());
      setIsSaved(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setGeminiApiKey(apiKey);
    setIsSaved(true);
    onKeyUpdated();
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const handleClear = () => {
    setGeminiApiKey('');
    setApiKey('');
    setIsSaved(false);
    onKeyUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#141416] border border-[#C6A24D]/50 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#302f33] bg-[#1B1B1E]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-[#C6A24D]/15 text-[#E8C878] border border-[#C6A24D]/40 flex items-center justify-center shadow-[0_0_15px_rgba(198,162,77,0.3)]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[#F1F0EC]">Google Gemini API Integration</h3>
              <p className="text-[11px] text-[#8a763c]">Model: gemini-2.5-flash & gemini-3.7-flash</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#96959c] hover:text-[#F1F0EC] hover:bg-[#202023] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4 text-xs">
          <p className="text-[#96959c] leading-relaxed">
            Connect your Google Gemini API key to activate live generative screenplay parsing, custom casting reasoning, and grounded conversational responses.
          </p>

          <div className="space-y-1.5">
            <label className="block text-[#E8C878] font-serif font-bold uppercase tracking-wider text-[10px]">
              Gemini API Key
            </label>
            <div className="relative">
              <Key className="w-4 h-4 text-[#6d6c72] absolute left-3 top-2.5" />
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm pl-9 pr-3 py-2 text-[#F1F0EC] font-mono text-xs outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1">
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noreferrer"
              className="text-[#C6A24D] hover:text-[#E8C878] inline-flex items-center gap-1 transition-colors"
            >
              Get a free key from Google AI Studio <ExternalLink className="w-3 h-3" />
            </a>

            {isGeminiConfigured() && (
              <button
                type="button"
                onClick={handleClear}
                className="text-red-400 hover:text-red-300 inline-flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3 h-3" /> Clear Key
              </button>
            )}
          </div>

          {/* Privacy & Storage note */}
          <div className="p-3 bg-[#1B1B1E] border border-[#232326] rounded text-[11px] text-[#6d6c72] leading-tight flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C6A24D] shrink-0 mt-0.5" />
            <span>
              Your API key is saved locally in your browser session (`localStorage`) and used directly for Google GenAI client calls.
            </span>
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs text-[#96959c] hover:text-[#F1F0EC]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-gold-sheen px-4 py-1.5 rounded text-xs font-bold flex items-center gap-1.5"
            >
              {isSaved ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-900" />
                  <span>Key Saved!</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Save & Activate Gemini</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
