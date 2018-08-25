import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import Jumbotron from '../components/Jumbotron.jsx';
import ProductCard from '../components/ProductCard.jsx';

export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center mt-5">
            {//* Navbar goes here. 
            }
            
            {//* Jumbotron goes here. 
            }
            <Jumbotron mainText="Restaurant Supplies Simplified" subText="Body text"/>
            {//* Navbar goes here. 
            }
            
            {//* Navbar goes here. 
            }
            
            {//* PoductCard goes here. 
            }
            <ProductCard />
        </div>
    );
  }
}
