import React from "react";
import ReactDOM from 'react-dom';

 
class SimilarBox extends React.Component {
  
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
            <p style={similarTextStyle}>Similar Items</p> 
        </div>
    );
  }
}

export default SimilarBox;
