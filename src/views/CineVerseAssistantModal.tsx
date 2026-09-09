import React, { useState, useRef, useEffect } from 'react';
import { MovieProject, ChatMessage } from '../types';
import { answerAssistantQueryAsync } from '../services/agentEngine';
import { Bot, X, Send, User } from 'lucide-react';

interface CineVerseAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: MovieProject;
}

export const CineVerseAssistantModal: React.FC<CineVerseAssistantModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      text: `Greetings! I am the **CineVerse Assistant**, grounded in all intelligence extracted for **${project.title}** (${project.targetIndustry}). 

Ask me anything about your character arcs, 7-part casting rubrics, Wikipedia biometric data, estimated budget allocations, or location scouting logistics.`,
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    'Who is the most important character?',
    'Why did you recommend this actor for the lead?',
    'Which scenes will be most expensive?',
    'Suggest a younger or alternative actor for the protagonist.',
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: 'Just now',
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInputText('');
    setIsTyping(true);

    try {
      const response = await answerAssistantQueryAsync(project, updatedHistory, text);
      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: 'Just now',
        citations: response.citations,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Error in assistant query:', err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 w-full max-w-lg h-[620px] max-h-[85vh] bg-[#141416] border border-[#C6A24D]/50 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#302f33] bg-[#1B1B1E]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-sm bg-gradient-to-br from-[#202023] to-[#141416] border border-[#C6A24D] flex items-center justify-center text-[#E8C878] shadow-[0_0_15px_rgba(198,162,77,0.3)]">
            <Bot className="w-4 h-4 text-[#E8C878]" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-sm text-[#F1F0EC] flex items-center gap-1.5">
              CineVerse Project Assistant
              <span className="w-2 h-2 rounded-full bg-[#C6A24D] animate-pulse" />
            </h3>
            <p className="text-[10px] text-[#8a763c] font-serif truncate max-w-[240px]">
              Grounded: {project.title}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded text-[#96959c] hover:text-[#F1F0EC] hover:bg-[#202023] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Prompts Bar */}
      <div className="px-4 py-2 bg-[#101012] border-b border-[#232326] flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[11px]">
        <span className="text-[10px] font-bold text-[#8a763c] uppercase font-serif shrink-0">Prompts:</span>
        {quickPrompts.map((qp, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(qp)}
            className="px-2.5 py-1 rounded bg-[#1B1B1E] hover:bg-[#202023] text-[#F1F0EC]/90 border border-[#232326] hover:border-[#C6A24D]/50 shrink-0 transition-all"
          >
            {qp}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 text-xs ${
                isUser
                  ? 'bg-[#202023] text-[#F1F0EC] border border-[#302f33]'
                  : 'bg-[#C6A24D]/15 text-[#E8C878] border border-[#C6A24D]/40'
              }`}>
                {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
              </div>

              <div className={`p-3.5 rounded-sm max-w-[85%] space-y-2 leading-relaxed ${
                isUser
                  ? 'bg-[#C6A24D] text-[#0A0A0B] font-medium'
                  : 'bg-[#1B1B1E] border border-[#232326] text-[#F1F0EC]'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.citations && msg.citations.length > 0 && (
                  <div className="pt-2 border-t border-[#302f33] text-[10px] text-[#8a763c] space-y-0.5">
                    <span className="font-semibold block uppercase tracking-wider">Grounding References:</span>
                    <div className="flex flex-wrap gap-1">
                      {msg.citations.map((c, cIdx) => (
                        <span key={cIdx} className="px-1.5 py-0.2 rounded bg-[#101012] border border-[#232326] text-[#96959c]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-[#8a763c] italic p-2">
            <Bot className="w-3.5 h-3.5 animate-spin" />
            <span>Consulting project screenplay intelligence...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="p-3 border-t border-[#302f33] bg-[#1B1B1E]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about casting reasoning, budget, timeline..."
            className="flex-1 bg-[#141416] border border-[#302f33] focus:border-[#C6A24D] rounded-sm px-3 py-2 text-xs text-[#F1F0EC] outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="btn-gold-sheen p-2 rounded-sm shrink-0 disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
