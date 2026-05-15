import type { PropsWithChildren, ReactNode } from 'react';

export type ThemeName = 'light' | 'dark' | 'ocean' | 'cappucino';
export type ThemeVariables = Record<string, string>;

export const THEMES: Record<ThemeName, ThemeVariables>;

export type ThemeProviderProps = PropsWithChildren<{
  defaultTheme?: ThemeName;
  storageKey?: string;
}>;

export function ThemeProvider(props: ThemeProviderProps): ReactNode;
export function ThemeSwitcher(props: { id?: string }): ReactNode;
export function useTheme(): { theme: ThemeName; setTheme: (theme: ThemeName) => void };
