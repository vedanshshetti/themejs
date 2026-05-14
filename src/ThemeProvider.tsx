import { useEffect, useMemo, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { ThemeContext } from './ThemeContext';
import { THEMES, type ThemeName, type ThemeVariables } from './themes';

const DEFAULT_STORAGE_KEY = 'themejs:selected-theme';

export interface ThemeProviderProps extends PropsWithChildren {
  defaultTheme?: ThemeName;
  storageKey?: string;
}

// Applies CSS variables for the selected theme and exposes theme state.
export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = DEFAULT_STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeName>(() => {
    if (typeof window === 'undefined') {
      return defaultTheme;
    }

    const savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme && savedTheme in THEMES) {
      return savedTheme as ThemeName;
    }

    return defaultTheme;
  });

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    const root = document.documentElement;

    // Clear all known CSS variables before applying the selected theme.
    const allThemeKeys = new Set(
      Object.values(THEMES).flatMap((themeValues) => Object.keys(themeValues as ThemeVariables)),
    );

    allThemeKeys.forEach((key) => {
      root.style.removeProperty(key);
    });

    // Apply CSS custom properties from the active theme.
    const selectedThemeVariables = THEMES[theme] as ThemeVariables;
    Object.entries(selectedThemeVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, theme);
    }
  }, [theme, storageKey]);

  const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}
