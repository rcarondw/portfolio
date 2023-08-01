import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

type Props = {
  children: Array<ReactNode> | ReactNode;
};

interface IThemeContext {
  theme: string;
  setTheme: (val: string) => void;
}

const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = (props: Props) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const colorTheme = theme === "light" ? "dark" : "light";
    root.classList.add(theme);
    root.classList.remove(colorTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (ctx) {
    return ctx;
  } else throw new Error("context not defined");
};
