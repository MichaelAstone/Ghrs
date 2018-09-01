import React from 'react';
import { Carousel, CarouselInner, CarouselItem, Container } from 'mdbreact';
import ReactDOM from 'react-dom';


//this component has a libary named mdbreact
class Specials extends React.Component {
    
    render(){
    return(
        <Container>
            <h4 className="mt-5 mb-2">Check out these specials!</h4>
            <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          thumbnails
          className="z-depth-1">
                <CarouselInner>
                    <CarouselItem itemId="1">
                        <img className="d-block w-100" src="https://bit.ly/2NhPxO0" alt="First slide" />
                    </CarouselItem>
                    <CarouselItem itemId="2">
                        <img className="d-block w-100" src="https://bit.ly/2PcJ9rZ" alt="Second slide" />
                    </CarouselItem>
                    <CarouselItem itemId="3">
                        <img className="d-block w-100" src="https://bit.ly/2NkQqFp" alt="Third slide" />
                    </CarouselItem>
                </CarouselInner>
            </Carousel>
        </Container>
    );
  }
}

export default Specials;