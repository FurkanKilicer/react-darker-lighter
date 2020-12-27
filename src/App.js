import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/lux/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { lighter, darker } from "./theme/theme";
import Navbar from "./components/Navbar";
import Button from "./components/button";
import Footer from "./components/footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Main from "./components/Main";

export default function App() {
  const [changer, setChanger] = React.useState(lighter);

  function themeChange() {
    setChanger(changer.theme === "light" ? darker : lighter);
  }
  return (
    <Router>
      <div className={`${changer.bgColor} ${changer.textColor}`}>
        <Navbar changer={changer} />
        <Button changer={changer} themeChange={themeChange} />
        <Switch>
          <Route path="/about">
            <About changer={changer} />
          </Route>
          <Route path="/contact">
            <Contact changer={changer} />
          </Route>
          <Route path="/">
            <Main changer={changer} />
          </Route>
        </Switch>

        <Footer changer={changer} />
      </div>
    </Router>
  );
}
