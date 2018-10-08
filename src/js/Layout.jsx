import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * Here we import to components that we will be using as "views" in our app
 * - Home: Will render when the url is /home or /index.html
 * - Product: Will render if the url is similar to /product/1,  /product/2,  /product/3... etc.
 */
import Home from "./views/Home.jsx";
import Product from "./views/Product.jsx";
import ProductCategory from "./components/ProductCategory.jsx";
import Login2 from "./views/Login2.jsx";
import ShoppingCart from "./views/ShoppingCart.jsx";
import Payments from "./views/Payments.jsx";
import NavbarComponent from './components/navbar/NavbarComponent.js';
import FooterPage from './components/footerComps/Footer.jsx';
import CategoryView from './views/CategoryView.jsx';
import  { Animation }  from 'mdbreact';
import Login from "./views/Login.jsx";

/**
 * The idea is to declare a component that will take care off laying out the entire application
 * resolving all the possible URL
 */
export default class Layout extends Flux.DashView {
    render() {
        return (
            <div>
                {/*
                    The <BrowserRouter> is needed when you want your application to use the React-Router npm package.
                */}
                <BrowserRouter>
                    <div>
                        <Animation type="slideInRight" delay="1s">
                            <NavbarComponent/>
                        </Animation>
                        {/*
                            Inside the <Switch> component is were we declare all of our application routes
                        */}
                        <Switch>
                            {/* For example, here we are saying that we want to render the component Home when the url is /index.html */}
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            {/* you can also define variables in the url, this url will match for any product*/}
                            <Route exact path="/category/:category_slug" component={CategoryView} />
                            <Route exact path="/category/:category_slug/:subcategory_slug" component={Home} />
                            <Route exact path="/product/:product_slug" component={Product} />
                            <Route exact path="/cart" component={ShoppingCart} />
                            <Route exact path="/checkout" component={Payments} />
                            <Route exact path="/register" component={Login2} />
                            <Route exact path="/about-us" component={Home} />
                            <Route exact path="/login" component={Login} />
                            
                            {/* for the last Rout we don't specify any path because we want it to render if no other path have matched */}
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                        <FooterPage />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}