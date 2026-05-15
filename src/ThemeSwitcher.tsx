import { ChangeEvent } from 'react';
import { useTheme } from './useTheme';
import { THEMES, type ThemeName } from './themes';

export interface ThemeSwitcherProps {
  id?: string;
}

// Basic runtime theme selector that lists all themes in THEMES.
export function ThemeSwitcher({ id = 'theme-switcher' }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as ThemeName);
  };

  return (
    <label htmlFor={id}>
      Theme
      <select id={id} value={theme} onChange={handleChange}>
        {Object.keys(THEMES).map((themeKey) => (
          <option key={themeKey} value={themeKey}>
            {themeKey}
          </option>
        ))}
      </select>
    </label>
  );
}
