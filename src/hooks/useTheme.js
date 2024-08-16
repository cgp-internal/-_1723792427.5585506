import { useState, useEffect } from 'react';

const defaultTheme = {
  primaryColor: 'blue',
  secondaryColor: 'white',
};

const useTheme = () => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(JSON.parse(storedTheme));
    }
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  };

  return [theme, updateTheme];
};

export const useThemeDefault = defaultTheme;
export { useTheme };