import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';

//this component has a libary named mdbreact
class Specials extends React.Component {
    
    render(){
    return(
        <div className="carouselBox">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div classNameName="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block " src="https://bit.ly/2owXAvu" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block " src="https://bit.ly/2wxoGqI" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block " src="https://bit.ly/2LR9Zn9" alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>    
    );
  }
}


export default Specials;


//https://bit.ly/2owXAvu

//https://bit.ly/2wxoGqI

//https://bit.ly/2LR9Zn9