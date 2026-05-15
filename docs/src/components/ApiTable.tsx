export function ApiTable() {
  return (
    <div className="api-table-wrap">
      <table className="api-table">
        <caption className="sr-only">ThemeProvider props</caption>
        <thead>
          <tr>
            <th scope="col">Prop</th>
            <th scope="col">Type</th>
            <th scope="col">Default</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>defaultTheme</code>
            </td>
            <td>
              <code>'light' | 'dark' | 'ocean' | 'cappucino'</code>
            </td>
            <td>
              <code>'light'</code>
            </td>
            <td>Starting theme when nothing is stored yet.</td>
          </tr>
          <tr>
            <td>
              <code>storageKey</code>
            </td>
            <td>
              <code>string</code>
            </td>
            <td>
              <code>'themejs:selected-theme'</code>
            </td>
            <td>localStorage key for persisting the active theme.</td>
          </tr>
        </tbody>
      </table>

      <h3 className="api-table__subtitle">Exports</h3>
      <table className="api-table">
        <caption className="sr-only">Package exports</caption>
        <thead>
          <tr>
            <th scope="col">Export</th>
            <th scope="col">Kind</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>ThemeProvider</code>
            </td>
            <td>Component</td>
            <td>Applies CSS variables and provides theme context.</td>
          </tr>
          <tr>
            <td>
              <code>ThemeSwitcher</code>
            </td>
            <td>Component</td>
            <td>Select element to cycle through built-in themes.</td>
          </tr>
          <tr>
            <td>
              <code>useTheme</code>
            </td>
            <td>Hook</td>
            <td>Returns <code>{'{ theme, setTheme }'}</code> from context.</td>
          </tr>
          <tr>
            <td>
              <code>THEMES</code>
            </td>
            <td>Constant</td>
            <td>Map of theme names to CSS custom property values.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
