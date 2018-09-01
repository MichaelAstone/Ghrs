import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import CarouselSlider from '../components/CarouselSlider.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Specials from '../components/Specials.jsx';
import AboutThisItem from '../components/AboutThisItem.jsx';
import NavbarComponent from '../components/navbar/NavbarComponent.js';
import ProductCategory from '../components/ProductCategory.jsx';
import SimilarItem from '../components/SimilarItem.jsx';
import Footer from '../components/Footer.jsx';
import FooterNavBar from '../components/FooterNavBar.jsx';
import CollagePng from '../../img/asset39.png';
import SchoolServingPng from '../../img/asset44.png';
import GhrsDesignPng from '../../img/asset42.png';

export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center">
            {//* Navbar goes here.

            }
            <NavbarComponent/>
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
        

            {//* ProductCard goes here.
            }
            
            {//* Product Categories go here. 
            }
            <ProductCategory />

            {//* PoductCard goes here.
            }

            {//* COMPONENT goes here.
            }

            {//* Product Categories go here.
            }
            <ProductCategory />

            {//* Product Cards go here.
            }
            <ProductCard />
            <AboutThisItem />

            {//* Similar items go here.
            }
            <SimilarItem />
            <Specials />
            <Footer/>
            
        </div>
    );
  }
}