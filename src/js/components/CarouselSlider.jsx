import React from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/JumbotronStyles.scss';
import CarouselImage1 from '../../img/asset39.png';
import CarouselImage2 from '../../img/asset42.png';
import CarouselImage3 from '../../img/asset42.png';
import  {Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask, Container } from 'mdbreact';

class CarouselSlider extends React.Component {
  render(){
    return(
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
    );
  }
}

CarouselSlider.propTypes = {
  h4titletext: PropTypes.string,
  h3titletext: PropTypes.string,
  ptext: PropTypes.string,
  ImgUrl: PropTypes.string
};

export default CarouselSlider;