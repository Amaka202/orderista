import React from 'react';
import './App.css';
import Home from './components/Home';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />      
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
      </Switch>
    </div>
  )
}

