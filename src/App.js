import React from 'react';
import './App.css';
import NavBar from "../src/Component/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CommentsDetail from './Component/CommentsDetail/CommentsDetail';
import NotFound from './Component/NotFound/NotFound';
import HomePage from './Component/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Switch>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/commentsDetail">
              <CommentsDetail></CommentsDetail>
            </Route>
            <Route exact path='/'>
              <HomePage></HomePage>
            </Route>
            <Route path='/*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </NavBar>
      </Router>
    </div>
  );
}

export default App;
