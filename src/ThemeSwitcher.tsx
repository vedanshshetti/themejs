import React, { type ChangeEvent } from 'react';
import { useTheme } from './useTheme.ts';
import { THEMES, type ThemeName } from './themes.ts';

export interface ThemeSwitcherProps {
  id?: string;
}

// Basic runtime theme selector that lists all themes in THEMES.
export function ThemeSwitcher({ id = 'theme-switcher' }: ThemeSwitcherProps): React.ReactElement {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeName);
  };

  return React.createElement(
    'label',
    { htmlFor: id },
    'Theme',
    React.createElement(
      'select',
      { id, value: theme, onChange: handleChange },
      Object.keys(THEMES).map((themeKey) =>
        React.createElement('option', { key: themeKey, value: themeKey }, themeKey),
      ),
    ),
  );
}
