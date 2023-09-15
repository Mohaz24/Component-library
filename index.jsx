import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Toggle from "./components/Toggles/index";

function App() {
  return (
    <>
      <Toggle>
        <Navbar />
        <Main />
        <Footer />
      </Toggle>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
