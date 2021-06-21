import { createContext } from 'react';

export const themes = {
    activeMenu: () => {},
    activeUser: () => {},
  };
  
  export const ThemeContext = createContext(
    themes
  );