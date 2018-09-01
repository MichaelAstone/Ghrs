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

const mdbootstrap1 = "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg";
const mdbootstrap2 = "https://mdbootstrap.com/img/Photos/Slides/img%20(69).jpg";
const mdbootstrap3 = "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg";

export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center">
            {//* Navbar goes here.
            }
            <NavbarComponent/>
            <CarouselSlider
            ImgUrl1={mdbootstrap1}
            ImgUrl2={mdbootstrap2}
            ImgUrl3={mdbootstrap3}
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
            

        </div>
    );
  }
}
