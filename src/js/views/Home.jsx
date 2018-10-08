import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container, ListGroup, ListGroupItem } from 'mdbreact';
import CarouselSlider from '../components/CarouselSlider.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Specials from '../components/Specials.jsx';
import AboutThisItem from '../components/AboutThisItem.jsx';
import ProductCategory from '../components/ProductCategory.jsx';
import SimilarItem from '../components/SimilarItem.jsx';
import RatingStar from '../components/RatingStar.jsx';
import CategoryList from '../components/CategoryList.jsx';
import SchoolServingPng from '../../img/asset41.jpeg';
import GhrsDesignPng from '../../img/asset42.png';
import {getAllCategories, store} from "../flux.js";
import  { Animation }  from 'mdbreact';
import '../../styles/ListGroupItem.scss';
import ProductCardBanner from '../components/ProductCardBanner.jsx';


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
            ImgUrl1={SchoolServingPng}
            ImgUrl2={GhrsDesignPng}
            carouselLength={2}
            h3title1="Labor Day Blow Out"
            h3title2= "Catering to all Restaurant Needs"
            text1= "FREE SHIPPING ON ALL ORDERS OVER $50"
            text2= "From Schools to Hotels, We Have What You Need"
            />

            {//* ProductCard goes here.
            }

            {//* Product Categories go here.
            }
            <ul>
                <Animation type="slideInRight" delay="1.1s">
                    {this.state.categories.map(c => (
                        <ListGroupItem key={c.id}>
                            <Link to={'category/'+ c.slug}> {c.name}</Link>
                        </ListGroupItem>
                    ))}
                </Animation>
            </ul>
            {//* Product Cards go here.
            }
            <Animation type="slideInRight" delay="1.2s">
                <ProductCardBanner/>
                <ProductCard />
            </Animation>
            <Animation type="slideInRight" delay="1.3s">
                <AboutThisItem 
                    productDetails=""
                    productShipping= ""
                    productQuestions= ""
                />
            </Animation>
            {//* Similar items go here.
            }
            <Animation type="slideInRight" delay="1.4s">
                <SimilarItem />
            </Animation>
            <Animation type="slideInRight" delay="1.5s">
                <Specials />
            </Animation>
        </div>
    );
  }
}
