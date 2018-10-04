import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";

export default class CategoryView extends Flux.DashView {
    render() {
        return (
            <div className="p-5">
                <h1>Product {this.props.match.params.id}</h1>
                <Link to="/">Back to home</Link>
            </div>
        );
    }
}
