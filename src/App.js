import React from 'react';
import './App.css';
import Home from './components/Home';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {
  Switch,
  Route,
} from "react-router-dom";

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
        <Route path="/">
          <Home />      
        </Route>
      </Switch>
    </div>
  )
}

