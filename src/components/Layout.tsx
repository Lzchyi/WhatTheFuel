import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, Clock, Droplets, HelpCircle, Lightbulb, Menu, Moon, Sun, X, Globe, MapPin } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { useTheme } from '../lib/theme';
import { cn } from '../lib/utils';

export function Layout() {
  const { language, setLanguage, t } = useI18n();
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home'), icon: Droplets },
    { path: '/global', label: t('nav.global'), icon: Globe },
    { path: '/malaysia', label: t('nav.malaysia'), icon: MapPin },
    { path: '/timeline', label: t('nav.timeline'), icon: Clock },
    { path: '/myths', label: t('nav.myths'), icon: HelpCircle },
    { path: '/sources', label: t('nav.sources'), icon: BookOpen },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <div className="rounded-md bg-amber-600 p-1.5 text-white"><Droplets size={20} /></div>
            <span className="hidden font-serif text-xl font-bold tracking-tight sm:block">WhatTheFuel</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map(({ path, label, icon: Icon }) => {
              const active = location.pathname === path;
              return (
                <Link key={path} to={path} className={cn('flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors', active ? 'bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-100' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100')}>
                  <Icon size={16} /> {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-md p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <select value={language} onChange={(e) => setLanguage(e.target.value as 'en' | 'ms' | 'zh')} className="rounded-md bg-stone-100 px-2 py-1.5 text-sm font-medium text-stone-700 outline-none dark:bg-stone-800 dark:text-stone-300">
              <option value="en">EN</option><option value="ms">BM</option><option value="zh">中文</option>
            </select>
            <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen((v) => !v)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
        {open && (
          <div className="border-t border-stone-200 bg-white px-4 py-3 dark:border-stone-800 dark:bg-stone-950 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navItems.map(({ path, label, icon: Icon }) => {
                const active = location.pathname === path;
                return (
                  <Link key={path} to={path} onClick={() => setOpen(false)} className={cn('flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium', active ? 'bg-stone-100 text-stone-900 dark:bg-stone-800 dark:text-stone-100' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100')}>
                    <Icon size={20} /> {label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow"><Outlet /></main>

      <footer className="mt-20 border-t border-stone-800 bg-stone-900 py-12 text-stone-400 dark:bg-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
          <div className="flex items-center gap-2"><Droplets size={20} className="text-amber-600" /><span className="font-serif text-xl font-bold text-stone-200">WhatTheFuel</span></div>
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-sm leading-relaxed text-stone-300">{t('footer.summary')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
