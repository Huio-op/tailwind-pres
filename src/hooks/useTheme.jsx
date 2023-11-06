import { createContext, useContext, useMemo, useState } from 'react';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    console.log(`asdasdasdasdasdas`, isDarkMode);
    setDarkMode(!document.documentElement.classList.contains(`dark`));
    document.documentElement.classList.toggle('dark');
  };

  const value = useMemo(
    () => ({
      isDarkMode,
      toggleTheme,
    }),
    [isDarkMode],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
