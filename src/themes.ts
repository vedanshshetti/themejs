// Shared type for CSS custom properties used by a theme.
export type ThemeVariables = Record<string, string>;

// Placeholder themes that can be expanded by consumers.
export const THEMES = {
  light: {
    '--background-color': '#ffffff',
    '--text-color': '#0f0f0f',
    '--accent-color': '#cdcdcd'
  },
  dark: {
    '--background-color': '#121212',
    '--text-color': '#f0f0f0',
    '--accent-color': '#434343',
  },
  ocean: {
    '--background-color': '#ecfeff',
    '--text-color': '#0f172a',
    '--accent-color': '#0891b2',
  },
  cappucino: {
    '--background-color': '#987663',
    '--text-color': '#4a312c',
    '--accent-color': '#987a5a',
  },
} as const;

// Theme key type inferred from the THEMES object.
export type ThemeName = keyof typeof THEMES;
