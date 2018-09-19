import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';

//this component has a libary named mdbreact
class Specials extends React.Component {
    
    render(){
    return(
        <Container>
            <h3 className="mt-5 mb-2"><b>Check out these specials!</b></h3>
            <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1">
                <CarouselInner>
                    <CarouselItem itemId="1">
                        <View>
                            <img className="d-block w-100" src="https://bit.ly/2owXAvu" alt="First slide" />
                        </View>
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <View>
                            <img className="d-block w-100" src="https://bit.ly/2wxoGqI" alt="Second slide" />
                        </View>
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <View>
                            <img className="d-block w-100" src="https://bit.ly/2LR9Zn9" alt="Third slide" />
                        </View>
                    </CarouselItem>
                </CarouselInner>
            </Carousel>
        </Container>
    );
  }
}


export default Specials;


//https://bit.ly/2owXAvu

//https://bit.ly/2wxoGqI

//https://bit.ly/2LR9Zn9