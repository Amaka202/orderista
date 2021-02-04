import React, {lazy, Suspense} from 'react';
import './App.css';
import Home from './components/Home';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {
  Switch,
  Route,
} from "react-router-dom";
// import Menu from './components/Menu';
// import Cart from './components/Cart';
// import AddMenu from './components/AddMenu';
// import OrdersList from './components/OrdersList';
import OrderDetail from './components/OrderDetail';


const Menu = lazy(() => import('././components/Menu'));
const Cart = lazy(() => import('././components/Cart'));
const AddMenu = lazy(() => import('././components/AddMenu'));
const OrdersList = lazy(() => import('././components/OrdersList'));
// const OrderDetail = lazy(() => import('././components/OrderDetail'));




export default function App() {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/myorders" component={Cart} />
        <Route path="/order/:id" component={OrderDetail} />
        <Route path="/orderslist" component={OrdersList} />
        <Route path="/addmenu" component={AddMenu} />
      </Switch>
      </Suspense>
    </div>
  )
}

