import React from 'react';
import './App.css';
import NavBar from "../src/Component/NavBar/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import HomePage from './Component/HomePage/HomePage';
import PostDetail from './Component/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar>
          <Switch>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <Route path="/postDetail/:id">
              <PostDetail></PostDetail>
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
