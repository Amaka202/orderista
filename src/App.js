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
import Orders from './components/Orders';
import AddMenu from './components/AddMenu';

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
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/addmenu">
          <AddMenu />
        </Route>
      </Switch>
    </div>
  )
}

