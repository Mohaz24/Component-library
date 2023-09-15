import React from "react";
import { ToggleContext } from "./Toggles/Toggle";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

export default function Navbar() {
  const { on, toggle, theme } = React.useContext(ToggleContext);

  return (
    <div className={`container theme-${theme}`}>
      <h2>Component Library++</h2>
      {on ? (
        <div className="theme">
          Dark
          <BsToggleOn onClick={toggle} className="toggle" />
        </div>
      ) : (
        <div className="theme">
          Light
          <BsToggleOff onClick={toggle} className="toggle" />
        </div>
      )}
    </div>
  );
}
