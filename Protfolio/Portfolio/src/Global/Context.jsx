import { createContext, useState } from "react";



export const provide = createContext(null);
const Context = ({ children }) => {
  const initialMode = localStorage.getItem('color-mode') || 'colorblind';
  const [theme, setTheme] = useState(initialMode);



  const setToggleTheme = () => {
    const mode = theme === 'colorblind' ? 'night' : 'colorblind';
    setTheme(mode);
    localStorage.setItem('color-mode', mode);
  };
  console.log("jskfjsksjskdjs", theme)


  const values = {
    setToggleTheme,
    theme
  };
  return (
    <provide.Provider value={values}>
      {children}
    </provide.Provider>
  );
};

export default Context;
