import { useContext } from 'react';
import { ThemeContext, type ThemeContextValue } from './ThemeContext.tsx';

// Helper hook for consuming ThemeContext safely.
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.');
  }

  return context;
}
