import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Home, About, Experience, Skills, Interest, Awards} from './pages';
import {Nav, Footer} from './layout';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
    <Router>
        <Nav />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/interest">
            <Interest />
          </Route>
          <Route path="/awards">
            <Awards />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
    </Router>
    </div>
  );
}

export default App;
