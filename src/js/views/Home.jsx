import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Specials from '../components/Specials.jsx';


export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center mt-5">
            {//* Navbar goes here. 
            }
            
            
            {//* Jumbotron goes here. 
            }
            <Jumbotron titleText="Restaurant Supplies Simplified" bodyText="Body text" buttonText="Learn More"/>
            
            {//* COMPONENT goes here. 
            }
            
            {//* Categories go here. 
            }
            <Category />
            
            {//* Product Cards go here. 
            }
            <ProductCard />
            
            {//* Similar items go here. 
            }
            <ProductCard />
        </div>
    );
  }
}
