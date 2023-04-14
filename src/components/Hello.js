import { useState } from "react";

export function Hello(props) {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark') ? 'light' : 'dark'
  );

  const toggleTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.toggle('light-theme');
      setTheme(theme === 'dark' ? 'light' : 'dark');
    } else {
      document.body.classList.toggle('dark-theme');
      setTheme(theme === 'dark' ? 'light' : 'dark');
    }
  }

  return (
    <div className="card">
      <h1 className="hello">Hello from React!</h1>
      <p>Tryin' out some different styling & theming techniques!</p>
      <button className='theme-toggle-btn'
              onClick={toggleTheme}>{theme} theme</button>
    </div>
  );
}