import { useEffect, useState } from "react";

export function Hello(props) {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark') ? 'light' : 'dark'
  );

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className="card">
      <h1 className="hello">Hello from React!</h1>
      <p>Tryin' out some different styling & theming techniques!</p>
      <button className='theme-toggle-btn'
              onClick={toggleTheme}>{theme === 'dark' ? 'light' : 'dark'} theme</button>
    </div>
  );
}