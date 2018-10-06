import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import ReactImageMagnify from 'react-image-magnify';

const imageBaseUrl = 'https://s3-us-west-1.amazonaws.com/react-package-assets/images/';
const images = [
  {name: 'wristwatch_355.jpg', vw: '355w'},
  {name: 'wristwatch_481.jpg', vw: '481w'},
  {name: 'wristwatch_584.jpg', vw: '584w'},
  {name: 'wristwatch_687.jpg', vw: '687w'},
  {name: 'wristwatch_770.jpg', vw: '770w'},
  {name: 'wristwatch_861.jpg', vw: '861w'},
  {name: 'wristwatch_955.jpg', vw: '955w'},
  {name: 'wristwatch_1033.jpg', vw: '1033w'},
  {name: 'wristwatch_1112.jpg', vw: '1112w'},
  {name: 'wristwatch_1192.jpg', vw: '1192w'},
  {name: 'wristwatch_1200.jpg', vw: '1200w'}
];

export default class Product extends Flux.DashView {
    
    get srcSet() {
        return images.map(image => {
        return `${imageBaseUrl}${image.name} ${image.vw}`;
        }).join(', ');
    }
    
    render(){
        return (
            <div className="product-container p-5">
                <h1>Product: {this.props.productName}</h1>
                     
                <p>Description: {this.props.productDescription}</p> 
                        
                <div className="fluid">
                    <div className="fluid__image-container">
                        <ReactImageMagnify {...{
                            smallImage: {
                              alt: 'Wristwatch by Ted Baker London',
                              isFluidWidth: true,
                              src: `${imageBaseUrl}wristwatch_1033.jpg`,
                              srcSet: this.srcSet,
                              sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw'
                            },
                            largeImage: {
                              alt: '',
                              src: `${imageBaseUrl}wristwatch_1200.jpg`,
                              width: 1200,
                              height: 1800
                            },
                            isHintEnabled: true
                        }}/>
                    </div>
                </div>
                <Link to="/home">Back to home</Link>
            </div>
        );
    }
}

Product.propTypes = {
  productName: PropTypes.string,
  productImageSrc1: PropTypes.string,
  productImageSrc2: PropTypes.string,
  productImageSrc3: PropTypes.string
};