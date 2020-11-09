import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path="/react-portfolio" component={Home} />
        <Route path="/react-portfolio/portfolio" component={Portfolio} />
        <Route path="/react-portfolio/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
