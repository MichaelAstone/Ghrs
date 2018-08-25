import React from 'react';
// import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {
  render() {
    return (
        <div className="jumbotron">
            <h1>{this.props.titleText}</h1>
            <p>{this.props.bodyText}</p>
            <PrimaryButton buttonText='Learn more'/>
        </div>
    );
  }
}

class PrimaryButton extends React.Component {
  render() {
    return (
        <div>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">{this.props.buttonText}</a></p>
        </div>
    );
  }
}

Jumbotron.propTypes = {
  titleText: PropTypes.string,
  bodyText: PropTypes.string
};

PrimaryButton.propTypes = {
  buttonText: PropTypes.string
};