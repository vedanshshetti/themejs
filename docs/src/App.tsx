import { ThemeSwitcher, useTheme, THEMES, type ThemeName } from 'themejs';
import { CodeBlock } from './components/CodeBlock';
import { ApiTable } from './components/ApiTable';

const INSTALL_CMD = 'npx jsr add @vedansh/themejs';

const THEME_LABELS: Record<ThemeName, string> = {
  light: 'Light',
  dark: 'Dark',
  ocean: 'Ocean',
  cappucino: 'Cappucino',
};

function DemoCard() {
  const { theme, setTheme } = useTheme();

  return (
    <section className="demo-card" aria-labelledby="demo-heading">
      <div className="demo-card__header">
        <h2 id="demo-heading">Live demo</h2>
        <ThemeSwitcher id="docs-theme-switcher" />
      </div>
      <p className="demo-card__theme">
        Active theme: <strong>{THEME_LABELS[theme]}</strong>
      </p>
      <div className="theme-swatches">
        {(Object.keys(THEMES) as ThemeName[]).map((name) => (
          <button
            key={name}
            type="button"
            className={`swatch${theme === name ? ' swatch--active' : ''}`}
            onClick={() => setTheme(name)}
            aria-pressed={theme === name}
          >
            <span
              className="swatch__preview"
              style={{
                background: THEMES[name]['--background-color'],
                color: THEMES[name]['--text-color'],
                borderColor: THEMES[name]['--accent-color'],
              }}
            >
              Aa
            </span>
            <span className="swatch__label">{THEME_LABELS[name]}</span>
          </button>
        ))}
      </div>
      <div
        className="sample-ui"
        style={{
          background: 'var(--background-color)',
          color: 'var(--text-color)',
          borderColor: 'var(--accent-color)',
        }}
      >
        <h3>Sample card</h3>
        <p>
          ThemeJS injects CSS variables on <code>:root</code>. This card reads{' '}
          <code>--background-color</code>, <code>--text-color</code>, and{' '}
          <code>--accent-color</code> from the active theme.
        </p>
        <button type="button" className="sample-ui__button">
          Accent button
        </button>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__badge">React · TypeScript · JSR</div>
        <h1>ThemeJS</h1>
        <p className="hero__lead">
          A lightweight React theme library. Swap palettes with CSS custom properties,
          persist user choice in <code>localStorage</code>, and ship with four built-in
          themes.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#getting-started">
            Get started
          </a>
          <a
            className="button button--ghost"
            href="https://github.com/vedanshshetti/themejs"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="content">
        <DemoCard />

        <section id="getting-started" className="section">
          <h2>Getting started</h2>
          <p>Install from JSR with your package manager of choice:</p>
          <CodeBlock code={INSTALL_CMD} />
          <p>
            Wrap your app with <code>ThemeProvider</code>:
          </p>
          <CodeBlock
            language="tsx"
            code={`import { ThemeProvider } from '@vedansh/themejs';

export function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <YourApp />
    </ThemeProvider>
  );
}`}
          />
        </section>

        <section id="components" className="section">
          <h2>Components &amp; hooks</h2>
          <h3>ThemeSwitcher</h3>
          <p>
            Drop in a native select that lists every theme in <code>THEMES</code>.
          </p>
          <CodeBlock
            language="tsx"
            code={`import { ThemeSwitcher } from '@vedansh/themejs';

export function Header() {
  return <ThemeSwitcher id="app-theme" />;
}`}
          />
          <h3>useTheme</h3>
          <p>Build custom controls with the theme context hook.</p>
          <CodeBlock
            language="tsx"
            code={`import { useTheme } from '@vedansh/themejs';

export function CustomToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button type="button" onClick={() => setTheme('dark')}>
      Current: {theme}
    </button>
  );
}`}
          />
        </section>

        <section id="styling" className="section">
          <h2>Styling with CSS variables</h2>
          <CodeBlock
            language="css"
            code={`body {
  background-color: var(--background-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

button.primary {
  background-color: var(--accent-color);
  color: var(--background-color);
}`}
          />
        </section>

        <section id="api" className="section">
          <h2>API reference</h2>
          <ApiTable />
        </section>
      </main>

      <footer className="footer">
        <p>
          Made by{' '}
          <a href="https://github.com/vedanshshetti" target="_blank" rel="noreferrer">
            Vedansh Shetti
          </a>
          . Published on{' '}
          <a href="https://jsr.io/@vedansh/themejs" target="_blank" rel="noreferrer">
            JSR
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
