import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Specials from '../components/Specials.jsx';
import AboutThisItem from '../components/AboutThisItem.jsx';
import NavbarComponent from '../components/navbar/NavbarComponent.js';
import ProductCategory from '../components/ProductCategory.jsx';

export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center mt-5">
            {//* Navbar goes here.
            }
            <NavbarComponent />
            {//* Jumbotron goes here.
            }
            <Jumbotron titleText="Restaurant Supplies Simplified" bodyText="Body text" buttonText="Learn More"/>
        

            {//* PoductCard goes here.
            }
            
            
            {//* Jumbotron goes here. 
            }
            <Jumbotron titleText="Restaurant Supplies Simplified" bodyText="Body text" buttonText="Learn More"/>
            
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
