// Shared type for CSS custom properties used by a theme.
export type ThemeVariables = Record<string, string>;

// Placeholder themes that can be expanded by consumers.
export const THEMES = {
  light: {
    '--background-color': '#ffffff',
    '--text-color': '#111827',
    '--accent-color': '#2563eb',
  },
  dark: {
    '--background-color': '#111827',
    '--text-color': '#f9fafb',
    '--accent-color': '#60a5fa',
  },
  ocean: {
    '--background-color': '#ecfeff',
    '--text-color': '#0f172a',
    '--accent-color': '#0891b2',
  },
} as const;

// Theme key type inferred from the THEMES object.
export type ThemeName = keyof typeof THEMES;
