import React from 'react';
import Welcome from './components/welcome/Welcome'
import Jeopardy from "./components/jeopardy/Jeopardy"

import Clock from "./components/clock/Clock"
import Contact from "./components/contact/Contact"
import Navigation from "./components/navigation/Navigation"

import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Route exact path="/" render={(props) => <Welcome {...props} name="eric" />} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/jeopardy" component={Jeopardy} />

    </div>
  );
}

export default App;
