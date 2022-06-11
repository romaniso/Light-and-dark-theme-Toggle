import React, { useContext } from "react";
import { ThemeContext } from "./App";
import { RiSunLine, RiMoonLine } from "react-icons/ri";

export default function Toggle() {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log(theme);
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <div className="toggle__container">
        <span className="toggle" id="sun">
          <RiSunLine />
        </span>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
        <span className="toggle" id="moon">
          <RiMoonLine />
        </span>
      </div>
    </>
  );
}
