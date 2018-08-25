import React from "react";

class ProductCard extends React.Component {

  render() {
    return (                
        <div>
            <img className="card-img-top" src="https://via.placeholder.com/150x150" alt="Card image cap" style = {{width: "150px"}}></img>
        </div>
    );
  }
}

export default ProductCard;
