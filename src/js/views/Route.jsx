import React from "react";
import { Route } from 'react-router-dom';
import WelcomePage from "./component/WelcomePage.jsx";
import Login from "./Login.jsx";
import Login2 from "./Login2.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import Home from "./Home.jsx";


const App = () => {
    return(<div>
        <Route path = "/" exact component = {Login} />
        <Route path = "/register" exact component = {Login2} />
        <Route path = "/generalhotel" exact component = {Home} />
        <Route path = "/shoppingcart" exact component = {ShoppingCart} />
    </div>);
};

export default App;