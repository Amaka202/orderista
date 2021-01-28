import React from 'react';
import './App.css';
import Home from './components/Home';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {ProtectedRoute} from './components/ProtectedRoute'
import {
  Switch,
  Route,
} from "react-router-dom";
import Menu from './components/Menu';
import Orders from './components/Orders';
import AddMenu from './components/AddMenu';
import OrdersList from './components/OrdersList';
import OrderDetail from './components/OrderDetail';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/myorders" component={Orders} />
        <Route path="/order/:id" component={OrderDetail} />
        <Route path="/orderslist" component={OrdersList} />
        <Route path="/addmenu" component={AddMenu} />


        {/* <ProtectedRoute exact path="/menu" component={Menu} />
        <ProtectedRoute path="/orders" component={Orders} />
        <ProtectedRoute path="/addmenu" component={AddMenu} /> */}
      </Switch>
    </div>
  )
}

