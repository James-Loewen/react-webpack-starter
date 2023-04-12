import './styles.scss';

export function Hello(props) {
  const toggleTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.toggle('light-theme');
    } else {
      document.body.classList.toggle('dark-theme');
    }
  }
  return (
    <div className="card">
      <h1 class="hello">Hello from React!</h1>
      <p>Tryin' out some different styling/theming techniques!</p>
      <button className='theme-toggle-btn'
              onClick={toggleTheme}>toggle theme</button>
    </div>
  );
}