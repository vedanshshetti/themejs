import { createContext } from 'react';
import type { ThemeName } from './themes';

// Shape of the theme context shared across components.
export interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

// Context is initialized as undefined and validated in useTheme().
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);
