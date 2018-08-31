import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';
import ProductCard from '../components/ProductCard.jsx';
import Specials from '../components/Specials.jsx';
import AboutThisItem from '../components/AboutThisItem.jsx';
import NavbarComponent from '../components/navbar/NavbarComponent.js';
import ProductCategory from '../components/ProductCategory.jsx';
import SimilarItem from '../components/SimilarItem.jsx';
import Footer from '../components/Footer.jsx';
import FooterNavBar from '../components/FooterNavBar.jsx';
import RigoBaby from '../../img/rigo-baby.jpg';

export default class Home extends Flux.DashView {
  render() {
    return (
        <div className="text-center">
            {//* Navbar goes here.

            }
            <NavbarComponent/>
            <Container>
                <h4 className="mt-5 mb-2">{this.props.h4titletext}</h4>
                <Carousel
                  activeItem={1}
                  length={4}
                  showControls={true}
                  showIndicators={false}
                  className="z-depth-1">
                    <CarouselInner>
                        <CarouselItem itemId="1">
                            <View>
                                <img className="d-block w-100" src={this.props.ImgUrl} alt="First slide" />
                            </View>
                            <CarouselCaption>
                                <h3 className="h3-responsive">{this.props.h3titletext}</h3>
                                <p>{this.props.ptext}</p>
                            </CarouselCaption>
                        </CarouselItem>
                    </CarouselInner>
                </Carousel>
            </Container>
        

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
            <Footer/>
            
        </div>
    );
  }
}