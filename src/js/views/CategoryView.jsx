import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import {store} from "../flux.js";
import { Link } from "react-router-dom";
import ProductCard from '../components/ProductCard.jsx';

export default class CategoryView extends Flux.DashView {
    constructor(){
        super();
        this.state = {
            category: null
        };
    }
    
    componentDidMount(){
        let categories = store.getState('categories');
        let category = categories.find((c) => {
            return (c.slug == this.props.match.params.category_slug);
          });
        this.setState({category});
    }
    
    render() {
        return (
            <div className="p-6">
                <h1>{(this.state.category)?this.state.category.name:"No Category"}</h1>
                <p>{(this.state.category)?this.state.category.description:"No Description"}</p>
                <ProductCard />
                <Link to="/">Back to home</Link>
            </div>
        );
    }
}
