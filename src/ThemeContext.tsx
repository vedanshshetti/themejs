import { createContext, type Context } from 'react';
import type { ThemeName } from './themes.ts';

// Shape of the theme context shared across components.
export interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

// Context is initialized as undefined and validated in useTheme().
export const ThemeContext: Context<ThemeContextValue | undefined> =
  createContext<ThemeContextValue | undefined>(undefined);
