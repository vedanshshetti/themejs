# ThemeJS 🎨

A lightweight, flexible, and fully-typed React theme management library. ThemeJS makes it effortless to implement a dynamic theming system in your React applications using CSS Custom Properties and Context.

**Documentation:** [themejs.vercel.app](https://themejs.vercel.app) (live demo, API reference, and setup guide)

## ✨ Features

- **Built-in Themes:** Comes out of the box with `light`, `dark`, `ocean`, and `cappucino` themes!
- **CSS Variable Based:** Operates efficiently by injecting CSS custom properties into your `root` tags, making styling via plain CSS, Sass, or styled-components a breeze.
- **Persistent State:** Automatically saves the user's selected theme to `localStorage`, so their preference is remembered between sessions.
- **Fully Typed:** Written in TypeScript to provide excellent autocomplete and type safety.
- **No Flash of Unstyled Content:** Defaults gracefully and integrates smoothly with SSR environments.

## 📦 Getting Started

You can install `themejs` directly from JSR using your favorite package manager:

```bash
# Using npm
npx jsr add @toolzone/themejs

# Using yarn
yarn dlx jsr add @toolzone/themejs

# Using pnpm
pnpm dlx jsr add @toolzone/themejs

# Using deno
deno add @toolzone/themejs
```

## 🚀 Usage

### 1. Wrap your app in the `ThemeProvider`
Wrap the root of your application with the `ThemeProvider` so your entire React tree has access to the theme context. 

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './themejs';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Optional: pass a defaultTheme="dark" or a custom storageKey */}
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

### 2. Built-in Component: `ThemeSwitcher`
You can use the built-in `<ThemeSwitcher />` anywhere in your app to give your users a quick way to cycle through available themes.

```tsx
import { ThemeSwitcher } from './themejs';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <ThemeSwitcher />
    </header>
  );
}
```

### 3. Build your own toggle with `useTheme`
If you need a custom UI, use the provided `useTheme` hook to read and set themes dynamically.

```tsx
import { useTheme } from './themejs';

function CustomToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Set to Dark Mode</button>
      <button onClick={() => setTheme('ocean')}>Set to Ocean Mode</button>
    </div>
  );
}
```

### 4. Style Your Components
Since ThemeJS injects standard CSS variables into the `:root`, you can access them in any CSS file:

```css
/* App.css */
body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

button {
  background-color: var(--accent-color);
  color: var(--background-color);
}
```

## ⚙️ Configuration & API

### `ThemeProvider` Props

| Prop | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `defaultTheme` | `'light' \| 'dark' \| 'ocean' \| 'cappucino'` | `'light'` | The starting theme if none has been saved previously. |
| `storageKey` | `string` | `'themejs:selected-theme'` | The key used to store the theme value in `window.localStorage`. |

---

*Made with ❤️ by Vedansh Shetti.*
