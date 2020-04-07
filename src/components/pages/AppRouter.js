import React from "react";
import Editor from './Editor';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/Editor">
          <Editor />
        </Route>
      </Switch>
    </Router>
  );
}
