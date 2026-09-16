'use client';

import { useState } from 'react';
import { Palette, Type, Globe, Bell, Shield, Save, RotateCcw, Sun, Moon, Monitor } from 'lucide-react';
import { toast } from 'sonner';

// ─── Types ───────────────────────────────────────────────
interface Settings {
  brandColor: string;
  accentColor: string;
  textColor: string;
  mutedTextColor: string;
  fontFamily: string;
  fontSize: string;
  siteTitle: string;
  siteTagline: string;
  siteUrl: string;
  adminEmail: string;
  postsPerPage: string;
  dateFormat: string;
  emailNotifications: boolean;
  newInquiryAlert: boolean;
  newUserAlert: boolean;
  maintenanceMode: boolean;
  theme: 'light' | 'dark' | 'system';
}

const defaultSettings: Settings = {
  brandColor: '#d92d45',
  accentColor: '#1e40af',
  textColor: '#18181b',
  mutedTextColor: '#71717a',
  fontFamily: 'Inter',
  fontSize: '16',
  siteTitle: 'The ICT Hub',
  siteTagline: 'Digital Transformation Experts',
  siteUrl: 'https://theicthub.com',
  adminEmail: 'admin@theicthub.com',
  postsPerPage: '8',
  dateFormat: 'MMM DD, YYYY',
  emailNotifications: true,
  newInquiryAlert: true,
  newUserAlert: false,
  maintenanceMode: false,
  theme: 'light',
};

// ─── Color Presets ────────────────────────────────────────
const colorPresets = [
  { label: 'ICT Red',    value: '#d92d45' },
  { label: 'Royal Blue', value: '#1e40af' },
  { label: 'Emerald',    value: '#059669' },
  { label: 'Violet',     value: '#7c3aed' },
  { label: 'Amber',      value: '#d97706' },
  { label: 'Slate',      value: '#334155' },
];

const fontOptions = ['Inter', 'Roboto', 'Poppins', 'Outfit', 'Nunito', 'Lato', 'Montserrat'];

// ─── Section Card wrapper ─────────────────────────────────
function Section({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40">
        <div className="p-1.5 rounded-lg bg-[#d92d45]/10">
          <Icon className="h-4 w-4 text-[#d92d45]" />
        </div>
        <h2 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">{title}</h2>
      </div>
      <div className="p-6 space-y-5">{children}</div>
    </div>
  );
}

// ─── Field row ────────────────────────────────────────────
function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 items-start">
      <div className="pt-2">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{label}</p>
        {hint && <p className="text-xs text-zinc-400 mt-0.5">{hint}</p>}
      </div>
      <div>{children}</div>
    </div>
  );
}

// ─── Input ────────────────────────────────────────────────
function Input({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#d92d45]/40 focus:border-[#d92d45] transition-all placeholder:text-zinc-400"
    />
  );
}

// ─── Toggle ───────────────────────────────────────────────
function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <label className="flex items-center justify-between gap-4 cursor-pointer group">
      <span className="text-sm text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none ${checked ? 'bg-[#d92d45]' : 'bg-zinc-200 dark:bg-zinc-700'}`}
      >
        <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${checked ? 'translate-x-4' : 'translate-x-0'}`} />
      </button>
    </label>
  );
}

// ─── Color Picker with presets ────────────────────────────
function ColorPicker({ value, onChange, presets }: { value: string; onChange: (v: string) => void; presets?: boolean }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="relative flex items-center">
        <input
          type="color"
          value={value}
          onChange={e => onChange(e.target.value)}
          className="h-9 w-12 cursor-pointer rounded-lg border border-zinc-200 dark:border-zinc-700 p-0.5 bg-white dark:bg-zinc-900"
        />
      </div>
      <Input value={value} onChange={e => onChange(e.target.value)} placeholder="#d92d45" className="w-32" />
      {presets && (
        <div className="flex gap-1.5 flex-wrap">
          {colorPresets.map(p => (
            <button
              key={p.value}
              type="button"
              title={p.label}
              onClick={() => onChange(p.value)}
              className="h-6 w-6 rounded-full border-2 transition-all hover:scale-110"
              style={{ backgroundColor: p.value, borderColor: value === p.value ? '#18181b' : 'transparent' }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [saved, setSaved] = useState(false);

  const set = <K extends keyof Settings>(key: K, value: Settings[K]) =>
    setSettings(prev => ({ ...prev, [key]: value }));

  const handleSave = () => {
    // In production: persist to DB/API
    setSaved(true);
    toast.success('Settings saved successfully!');
    setTimeout(() => setSaved(false), 3000);
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    toast.info('Settings reset to defaults.');
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Page header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">General Settings</h1>
          <p className="text-sm text-zinc-500 mt-1">Manage your site appearance, content, and notification preferences.</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Reset
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-[#d92d45] hover:bg-[#b02235] text-white shadow-sm shadow-[#d92d45]/25 transition-all"
          >
            <Save className="h-3.5 w-3.5" /> Save Changes
          </button>
        </div>
      </div>

      {/* ── Theme ── */}
      <Section icon={Monitor} title="Theme Mode">
        <Field label="Color Mode" hint="Controls the dashboard appearance">
          <div className="flex gap-2">
            {(['light', 'dark', 'system'] as const).map(mode => (
              <button
                key={mode}
                type="button"
                onClick={() => set('theme', mode)}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg border transition-all capitalize ${settings.theme === mode ? 'border-[#d92d45] bg-[#d92d45]/10 text-[#d92d45] font-semibold' : 'border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300'}`}
              >
                {mode === 'light' && <Sun className="h-3.5 w-3.5" />}
                {mode === 'dark' && <Moon className="h-3.5 w-3.5" />}
                {mode === 'system' && <Monitor className="h-3.5 w-3.5" />}
                {mode}
              </button>
            ))}
          </div>
        </Field>
      </Section>

      {/* ── Colors ── */}
      <Section icon={Palette} title="Colors">
        <Field label="Brand / Primary Color" hint="Used for buttons, links and highlights">
          <ColorPicker value={settings.brandColor} onChange={v => set('brandColor', v)} presets />
        </Field>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Accent Color" hint="Secondary highlights and badges">
            <ColorPicker value={settings.accentColor} onChange={v => set('accentColor', v)} />
          </Field>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Body Text Color" hint="Main content text color">
            <ColorPicker value={settings.textColor} onChange={v => set('textColor', v)} />
          </Field>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Muted Text Color" hint="Captions, hints and secondary labels">
            <ColorPicker value={settings.mutedTextColor} onChange={v => set('mutedTextColor', v)} />
          </Field>
        </div>

        {/* Live Preview */}
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 mb-3">Live Preview</p>
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-700 p-4 space-y-2 bg-zinc-50 dark:bg-zinc-900">
            <p className="text-base font-bold" style={{ color: settings.textColor }}>The ICT Hub — Sample Heading</p>
            <p className="text-sm" style={{ color: settings.mutedTextColor }}>This is a muted subtitle or description text for the panel.</p>
            <button className="px-3 py-1.5 text-sm font-semibold text-white rounded-lg" style={{ backgroundColor: settings.brandColor }}>
              Primary Button
            </button>
          </div>
        </div>
      </Section>

      {/* ── Typography ── */}
      <Section icon={Type} title="Typography">
        <Field label="Font Family">
          <select
            value={settings.fontFamily}
            onChange={e => set('fontFamily', e.target.value)}
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#d92d45]/40 focus:border-[#d92d45] transition-all"
          >
            {fontOptions.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </Field>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Base Font Size" hint="In pixels (px)">
            <div className="flex items-center gap-3">
              <Input
                type="number"
                min={12}
                max={24}
                value={settings.fontSize}
                onChange={e => set('fontSize', e.target.value)}
                className="w-24"
              />
              <span className="text-sm text-zinc-400">px</span>
              <span className="text-sm text-zinc-500" style={{ fontFamily: settings.fontFamily, fontSize: `${settings.fontSize}px` }}>
                Preview text
              </span>
            </div>
          </Field>
        </div>
      </Section>

      {/* ── Site Info ── */}
      <Section icon={Globe} title="Site Information">
        <Field label="Site Title">
          <Input value={settings.siteTitle} onChange={e => set('siteTitle', e.target.value)} placeholder="The ICT Hub" />
        </Field>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Tagline" hint="Short description shown in meta tags">
            <Input value={settings.siteTagline} onChange={e => set('siteTagline', e.target.value)} placeholder="Digital Transformation Experts" />
          </Field>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Site URL">
            <Input value={settings.siteUrl} onChange={e => set('siteUrl', e.target.value)} placeholder="https://theicthub.com" />
          </Field>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Admin Email">
            <Input type="email" value={settings.adminEmail} onChange={e => set('adminEmail', e.target.value)} placeholder="admin@theicthub.com" />
          </Field>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Posts Per Page" hint="Number of blog posts shown per page">
            <Input type="number" min={1} max={50} value={settings.postsPerPage} onChange={e => set('postsPerPage', e.target.value)} className="w-24" />
          </Field>
        </div>
        <div className="border-t border-zinc-100 dark:border-zinc-800 pt-5">
          <Field label="Date Format">
            <select
              value={settings.dateFormat}
              onChange={e => set('dateFormat', e.target.value)}
              className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-[#d92d45]/40 focus:border-[#d92d45] transition-all"
            >
              <option>MMM DD, YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </Field>
        </div>
      </Section>

      {/* ── Notifications ── */}
      <Section icon={Bell} title="Notifications">
        <div className="space-y-4">
          <Toggle checked={settings.emailNotifications} onChange={v => set('emailNotifications', v)} label="Email Notifications" />
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
            <Toggle checked={settings.newInquiryAlert} onChange={v => set('newInquiryAlert', v)} label="New Inquiry Alert" />
          </div>
          <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
            <Toggle checked={settings.newUserAlert} onChange={v => set('newUserAlert', v)} label="New User Registration Alert" />
          </div>
        </div>
      </Section>

      {/* ── Security / Maintenance ── */}
      <Section icon={Shield} title="Security & Maintenance">
        <div className="space-y-4">
          <Toggle
            checked={settings.maintenanceMode}
            onChange={v => set('maintenanceMode', v)}
            label="Maintenance Mode"
          />
          {settings.maintenanceMode && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm">
              <Shield className="h-4 w-4 shrink-0" />
              Site is currently in maintenance mode. Visitors will see a maintenance page.
            </div>
          )}
        </div>
      </Section>

      {/* Bottom save bar */}
      <div className="sticky bottom-0 bg-white/90 dark:bg-zinc-950/90 backdrop-blur border-t border-zinc-200 dark:border-zinc-800 -mx-4 md:-mx-6 lg:-mx-8 px-4 md:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <p className="text-xs text-zinc-400">
          {saved ? '✓ Changes saved' : 'Unsaved changes will be lost on navigation.'}
        </p>
        <div className="flex gap-2">
          <button onClick={handleReset} className="px-3 py-1.5 text-sm font-medium rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
            Reset
          </button>
          <button onClick={handleSave} className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-semibold rounded-lg bg-[#d92d45] hover:bg-[#b02235] text-white shadow-sm transition-all">
            <Save className="h-3.5 w-3.5" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
