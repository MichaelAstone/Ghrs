import React from "react";
import Flux from "@4geeksacademy/react-flux-dash";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default class Product extends Flux.DashView {
    render() {
        return (
            <div className="product-container p-5">
                <h1>Product: {this.props.productName}</h1>
                     
                <p>Description: {this.props.productDescription}</p> 
                        
                <div className="perimeter">
                    <div className="image">
                        <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: `${imageBaseUrl}wristwatch_1033.jpg`,
                                srcSet: this.srcSet,
                                sizes: '(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw',
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