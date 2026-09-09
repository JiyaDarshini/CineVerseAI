import React, { useState, useEffect } from 'react';
import {
  getNeonDatabaseUrl,
  setNeonDatabaseUrl,
  isNeonConfigured,
  testNeonConnection,
  initNeonDatabaseSchema,
} from '../services/neonService';
import { X, Database, Check, ExternalLink, Trash2, RefreshCw, Layers, ShieldCheck, AlertCircle } from 'lucide-react';

interface NeonSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDatabaseUpdated: () => void;
}

export const NeonSettingsModal: React.FC<NeonSettingsModalProps> = ({
  isOpen,
  onClose,
  onDatabaseUpdated,
}) => {
  const [dbUrl, setDbUrl] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<{ success: boolean; message: string } | null>(null);
  const [migrating, setMigrating] = useState(false);
  const [migrationResult, setMigrationResult] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setDbUrl(getNeonDatabaseUrl());
      setIsSaved(false);
      setTestResult(null);
      setMigrationResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setNeonDatabaseUrl(dbUrl);
    setIsSaved(true);
    onDatabaseUpdated();
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const handleTestConnection = async () => {
    setTesting(true);
    setTestResult(null);
    // temporarily save input URL to test
    setNeonDatabaseUrl(dbUrl);
    
    const res = await testNeonConnection();
    setTesting(false);
    if (res.success) {
      setTestResult({
        success: true,
        message: `Connected to Neon Postgres! Server time: ${new Date(res.serverTime || '').toLocaleTimeString()}`,
      });
    } else {
      setTestResult({
        success: false,
        message: res.error || 'Connection failed. Verify connection string and network access.',
      });
    }
  };

  const handleRunMigrations = async () => {
    setMigrating(true);
    setMigrationResult(null);
    setNeonDatabaseUrl(dbUrl);

    const res = await initNeonDatabaseSchema();
    setMigrating(false);
    setMigrationResult({
      success: res.success,
      message: res.message,
    });
    if (res.success) {
      onDatabaseUpdated();
    }
  };

  const handleClear = () => {
    setNeonDatabaseUrl('');
    setDbUrl('');
    setIsSaved(false);
    setTestResult(null);
    setMigrationResult(null);
    onDatabaseUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#141416] border border-[#C6A24D]/50 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#302f33] bg-[#1B1B1E]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-emerald-950/40 text-emerald-400 border border-emerald-800/60 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-[#F1F0EC]">Neon Tech Serverless Postgres</h3>
              <p className="text-[11px] text-[#8a763c]">Database for User Credentials, Passwords & Project Data</p>
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
            Connect your <strong className="text-[#E8C878]">Neon Postgres</strong> database to persist registered user accounts, bcrypt-hashed login credentials, and movie production pipelines.
          </p>

          <div className="space-y-1.5">
            <label className="block text-[#E8C878] font-serif font-bold uppercase tracking-wider text-[10px]">
              Neon Database Connection String (Postgres URL)
            </label>
            <div className="relative">
              <Database className="w-4 h-4 text-[#6d6c72] absolute left-3 top-2.5" />
              <input
                type="password"
                value={dbUrl}
                onChange={(e) => setDbUrl(e.target.value)}
                placeholder="postgresql://user:password@ep-xyz.us-east-2.aws.neon.tech/neondb?sslmode=require"
                className="w-full bg-[#1B1B1E] border border-[#302f33] focus:border-[#C6A24D] rounded-sm pl-9 pr-3 py-2 text-[#F1F0EC] font-mono text-xs outline-none transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] pt-1">
            <a
              href="https://console.neon.tech"
              target="_blank"
              rel="noreferrer"
              className="text-[#C6A24D] hover:text-[#E8C878] inline-flex items-center gap-1 transition-colors"
            >
              Get a free database from Neon.tech <ExternalLink className="w-3 h-3" />
            </a>

            {isNeonConfigured() && (
              <button
                type="button"
                onClick={handleClear}
                className="text-red-400 hover:text-red-300 inline-flex items-center gap-1 transition-colors"
              >
                <Trash2 className="w-3 h-3" /> Disconnect Neon
              </button>
            )}
          </div>

          {/* Test & Migration Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={handleTestConnection}
              disabled={!dbUrl || testing}
              className="px-3 py-2 rounded bg-[#1B1B1E] hover:bg-[#202023] text-[#F1F0EC] border border-[#302f33] hover:border-[#C6A24D]/50 flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 text-[#E8C878] ${testing ? 'animate-spin' : ''}`} />
              <span>{testing ? 'Testing...' : 'Test Connection'}</span>
            </button>

            <button
              type="button"
              onClick={handleRunMigrations}
              disabled={!dbUrl || migrating}
              className="px-3 py-2 rounded bg-[#1B1B1E] hover:bg-[#202023] text-[#E8C878] border border-[#C6A24D]/30 hover:border-[#C6A24D] flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{migrating ? 'Migrating...' : 'Init DB Tables'}</span>
            </button>
          </div>

          {/* Test / Migration Results Feedback */}
          {testResult && (
            <div className={`p-3 rounded border text-[11px] flex items-start gap-2 ${
              testResult.success
                ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60'
                : 'bg-rose-950/40 text-rose-300 border-rose-800/60'
            }`}>
              {testResult.success ? <Check className="w-4 h-4 shrink-0 text-emerald-400" /> : <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />}
              <span>{testResult.message}</span>
            </div>
          )}

          {migrationResult && (
            <div className={`p-3 rounded border text-[11px] flex items-start gap-2 ${
              migrationResult.success
                ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60'
                : 'bg-rose-950/40 text-rose-300 border-rose-800/60'
            }`}>
              {migrationResult.success ? <Check className="w-4 h-4 shrink-0 text-emerald-400" /> : <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />}
              <span>{migrationResult.message}</span>
            </div>
          )}

          {/* Note */}
          <div className="p-3 bg-[#1B1B1E] border border-[#232326] rounded text-[11px] text-[#6d6c72] leading-tight flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C6A24D] shrink-0 mt-0.5" />
            <span>
              Passphrases are salted and hashed with <strong>bcrypt</strong> before transmission and storage. Database transactions execute over encrypted TLS connections to Neon Cloud.
            </span>
          </div>

          {/* Footer Actions */}
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
                  <span>Saved!</span>
                </>
              ) : (
                <>
                  <Database className="w-3.5 h-3.5" />
                  <span>Save Connection</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
