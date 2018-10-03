import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import CarouselSlider from '../components/CarouselSlider.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Specials from '../components/Specials.jsx';
import AboutThisItem from '../components/AboutThisItem.jsx';
import ProductCategory from '../components/ProductCategory.jsx';
import SimilarItem from '../components/SimilarItem.jsx';
import RatingStar from '../components/RatingStar.jsx';
import CollagePng from '../../img/asset39.png';
import SchoolServingPng from '../../img/asset44.png';
import GhrsDesignPng from '../../img/asset42.png';
import {getAllCategories, store} from "../flux.js";

export default class Home extends Flux.DashView {
  constructor(){
        super();
        this.state = {
            categories: []
        };
    }
  
  componentDidMount(){
        //This function fetches all categories from the database.
        getAllCategories();
        //This is getting the categories from the state & if there are categories
        //then subscribe
        let categories = store.getState('categories');
        if(categories) this.setState({categories});
        this.subscribe(store, 'categories', (categories) => {
            this.setState({ categories });
            console.log(categories);
        });
    }
  
  render() {
    return (
        <div className="text-center">
            {//* Navbar goes here.
            }
            <CarouselSlider
            ImgUrl1={CollagePng}
            ImgUrl2={SchoolServingPng}
            ImgUrl3={GhrsDesignPng}
            carouselLength={3}
            h3title1="Labor Day Blow Out"
            h3title2= "Catering to all Restaurant Needs"
            h3title3= "Over 13 Years of Excellence"
            text1= "FREE SHIPPING ON ALL ORDERS OVER $50"
            text2= "From Schools to Hotels, We Have What You Need"
            text3= "No One Can Beat Our Prices"
            />
            <RatingStar />

            {//* ProductCard goes here.
            }

            {//* Product Categories go here.
            }
            
            {this.state.categories.map(c => (<li key={c.id}><Link to={'category/'+ c.slug}> {c.name}</Link></li>))}
            {//* Product Cards go here.
            }
            <ProductCard />
            <AboutThisItem 
              productDetails=""
              productShipping= ""
              productQuestions= ""
            />

            {//* Similar items go here.
            }
            <SimilarItem />
            <Specials />
        </div>
    );
  }
}
