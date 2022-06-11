import "./App.css";
import Toggle from "./Toggle";
import Content from "./Content";
import React, { createContext, useState } from "react";
export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className="app" id={theme}>
        <div className="container">
          <Toggle />
          <Content />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
