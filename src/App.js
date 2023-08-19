import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, myMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  let toggleStyle = () => {
    if (mode === "light") {
      myMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled.", "success");
    } else {
      myMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled.", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          aboutText="About"
          showAlert={showAlert}
          toggleStyle={toggleStyle}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact path="/about"
            element={<About mode={mode} toggleStyle={toggleStyle} />}
          />
          <Route
            exact path="/"
            element={
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                toggleStyle={toggleStyle}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
