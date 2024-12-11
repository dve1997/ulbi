import { useState } from 'react';

enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export const useSwitchingTheme = () => {
  const initialTheme = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : localStorage.setItem('theme', Theme.DARK);
  const [theme, setTheme] = useState<Theme>(initialTheme as Theme);

  const onSwitchingTheme = () => {
    const curTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    localStorage.setItem('theme', curTheme);
    setTheme(curTheme);
  };

  return {
    theme,
    onSwitchingTheme,
  };
};
