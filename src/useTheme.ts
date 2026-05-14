import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

// Helper hook for consuming ThemeContext safely.
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider.');
  }

  return context;
}
