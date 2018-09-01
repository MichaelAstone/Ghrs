import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class AboutThisItem extends Component {
  
  render() {
    return (
        <div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Details</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Shipping</a>
                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Questions</a>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">{this.props.productDetails}</div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">{this.props.productShipping}</div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">{this.props.productQuestions}</div>
            </div>
        </div>
    );
  }
}

AboutThisItem.propTypes = {
  productDetails: PropTypes.string,
  productShipping: PropTypes.string,
  productQuestions: PropTypes.string
};


export default AboutThisItem;