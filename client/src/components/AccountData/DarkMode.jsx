import { useState, useEffect } from "react";
import '../../style/DarkMode.css'
import ReactSwitch from 'react-switch'
const DarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div>
      <div className="switch">
        <label>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</label>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
      </div>
    </div>
  );
}

export default DarkMode;
