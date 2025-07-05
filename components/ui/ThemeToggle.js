import React from 'react';
import { Moon, Sun } from 'lucide-react';

import { cn } from '../../lib/utils';

export function ThemeToggle({ className }) {
  // Use null as initial state to detect if we're in SSR
  const [theme, setTheme] = React.useState(null);
  const [isChanging, setIsChanging] = React.useState(false);

  // Initialize theme from localStorage or system preference
  React.useEffect(() => {
    // This code only runs client-side
    // First check localStorage
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      // Use stored theme preference
      setTheme(storedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // If no stored preference, check system preference
      setTheme('dark');
    } else {
      // Default to light theme
      setTheme('light');
    }
  }, []);

  // Apply theme changes to document and store preference
  React.useEffect(() => {
    // Skip during SSR or when theme is not yet determined
    if (theme === null) return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Store theme preference in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeChange = () => {
    setIsChanging(true);
    setTheme(theme === 'light' ? 'dark' : 'light');
    setTimeout(() => setIsChanging(false), 300); // Match the transition duration
  };

  return (
    <button
      onClick={handleThemeChange}
      className={cn(
        'relative w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50',
        isChanging && 'pointer-events-none',
        className,
      )}
      aria-label='Toggle theme'
      disabled={isChanging}
    >
      <Sun className='absolute inset-0 h-full w-full transition-all duration-300 opacity-100 rotate-0 dark:opacity-0 dark:-rotate-90' />
      <Moon className='absolute inset-0 h-full w-full transition-all duration-300 opacity-0 rotate-90 dark:opacity-100 dark:rotate-0' />
    </button>
  );
}
