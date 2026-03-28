import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  // 1. Check if the user has a saved preference; default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return 'dark'; 
  });

  // 2. Update the body class and save to localStorage whenever the theme changes
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
    }

    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // 3. The function that runs when the button is clicked
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // 4. The button itself
  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '8px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: theme === 'dark' ? '#333' : '#e0e0e0',
        color: theme === 'dark' ? '#fff' : '#000',
        border: 'none'
      }}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}
