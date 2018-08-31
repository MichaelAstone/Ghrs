import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import CarouselSlider from '../components/CarouselSlider.jsx';
import ProductCard from '../components/ProductCard.jsx';
<<<<<<< HEAD
import CustomerReviews from '../components/CustomerReviews.jsx';



=======
>>>>>>> 70a56dff69029b99d281cf88f4e413b0c38a4b61
import Specials from '../components/Specials.jsx';
import AboutThisItem from '../components/AboutThisItem.jsx';
import NavbarComponent from '../components/navbar/NavbarComponent.js';
import ProductCategory from '../components/ProductCategory.jsx';
import SimilarItem from '../components/SimilarItem.jsx';
<<<<<<< HEAD
import Footer from '../components/footerComps/Footer.jsx';
import FooterNavBar from '../components/footerComps/FooterNavBar.jsx';

=======
import Footer from '../components/Footer.jsx';
import FooterNavBar from '../components/FooterNavBar.jsx';
import RigoBaby from '../../img/rigo-baby.jpg';
>>>>>>> 70a56dff69029b99d281cf88f4e413b0c38a4b61

const mdbootstrap1 = "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg";
const mdbootstrap2 = "https://mdbootstrap.com/img/Photos/Slides/img%20(69).jpg";
const mdbootstrap3 = "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg";

export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center">
            {//* Navbar goes here.

            }
<<<<<<< HEAD
            <NavbarComponent />
            {//* Jumbotron goes here.
            }
            <Jumbotron titleText="Restaurant Supplies Simplified" bodyText="Body text" buttonText="Learn More"/>


            {//* ProductCard goes here.
            }


            {//* Jumbotron goes here.
            }
            <Jumbotron titleText="Restaurant Supplies Simplified" bodyText="Body text" buttonText="Learn More"/>
            {//* Product Categories go here.
=======
            <NavbarComponent/>
            <CarouselSlider 
            ImgUrl1={mdbootstrap1}
            ImgUrl2={mdbootstrap2}
            ImgUrl3={mdbootstrap3}
            />
        

            {//* ProductCard goes here.
            }
            
            {//* Product Categories go here. 
>>>>>>> 70a56dff69029b99d281cf88f4e413b0c38a4b61
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
            <CustomerReviews />
            <ProductCard />
            <AboutThisItem />

            {//* Similar items go here.
            }

            <Footer/>



        </div>
    );
  }
}