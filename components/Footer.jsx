import React from "react";
import { ToggleContext } from "./Toggles/Toggle";

export default function Footer() {
  const { theme } = React.useContext(ToggleContext);
  return (
    <footer className={`foot-theme-${theme}`}>
      <div className="footer">
        <p>@copyright Mohaz 2023 </p>
      </div>
    </footer>
  );
}