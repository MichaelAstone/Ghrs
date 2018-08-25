import React from "react";
import ReactDOM from 'react-dom';
import Stars from './Stars.jsx';
 
class SimilarItem extends React.Component {
  
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
        <Stars />
            <p style={similarTextStyle}>Similar Items</p> 
        </div>
    );
  }
}

export default SimilarItem;
