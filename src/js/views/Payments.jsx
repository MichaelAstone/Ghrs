import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import '../../styles/Payments.scss';


export default class Payments extends Flux.DashView {
    render() {
        return (
            <div className="p-5">
                <h1>Payment</h1>
                <Link to="/home">Back to home</Link>
                {/*
                insert progress bubbles here
                */}
                <p>Product price checkout review completed</p>
                <div class="dropdown">
                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select card type
                      </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">VISA</a>
                        <a class="dropdown-item" href="#">MasterCard</a>
                        <a class="dropdown-item" href="#">Discovery</a>
                        <a class="dropdown-item" href="#">American Express</a>
                    </div>
                </div>
            </div>
        );
    }
}



{/*

https://medium.com/@rcdexta/simple-credit-card-payment-form-with-stripe-js-4fd74903e23c

https://stripe.com/docs/recipes/elements-react



*/}