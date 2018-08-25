import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Specials from '../components/Specials.jsx';
<<<<<<< HEAD
import NavbarComponent from '../components/navbar/NavbarComponent.js';

=======
import ProductCategory from '../components/ProductCategory.jsx';
>>>>>>> 8c57e76f647af0b0c724d2805eda54b4eb714d4a

export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center mt-5">
            {//* Navbar goes here.
            }
<<<<<<< HEAD
            <NavbarComponent />
            {//* Jumbotron goes here.
            }
            <Jumbotron titleText="Restaurant Supplies Simplified" bodyText="Body text" buttonText="Learn More"/>
            {//* Navbar goes here.
            }

            {//* Navbar goes here.
            }

            {//* PoductCard goes here.
=======
            
            
            {//* Jumbotron goes here. 
            }
            <Jumbotron titleText="Restaurant Supplies Simplified" bodyText="Body text" buttonText="Learn More"/>
            
            {//* COMPONENT goes here. 
            }
            
            {//* Product Categories go here. 
            }
            <ProductCategory />
            
            {//* Product Cards go here. 
>>>>>>> 8c57e76f647af0b0c724d2805eda54b4eb714d4a
            }
            <ProductCard />
            
            {//* Similar items go here. 
            }
            <SimilarItem />
        </div>
    );
  }
}
