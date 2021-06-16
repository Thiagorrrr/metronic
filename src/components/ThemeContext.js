import { createContext } from 'react';

export const themes = {
    ChangeCity: () => ({}),
    ChangeMeters: () => ({}),
  };
  
  export const ThemeContext = createContext(
    themes
  );