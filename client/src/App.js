import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login.js";
import BubblePage from "./components/BubblePage.js";
import PrivateRoute from "./PrivateRoute.js";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/bubbles" component={BubblePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
