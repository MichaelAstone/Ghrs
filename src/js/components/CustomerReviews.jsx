import React from "react";
import ReactDOM from 'react-dom';
import Stars from './Stars.jsx';

class CustomerReviews extends React.Component {

  render() {
    const similarBoxStyle = {
    margin: '15px',
    border: '1px solid gray'
  };
  const similarTextStyle = {
    color: 'gray',
    fontSize: '32px',
    borderBottom: '1px solid gray',
    margin: '0px 15px 15px 15px'

  };

    return (
        <div style={similarBoxStyle}>

            <p style={similarTextStyle}>Customer Reviews</p>
            <Stars />
        </div>
    );
  }
}

export default CustomerReviews;
