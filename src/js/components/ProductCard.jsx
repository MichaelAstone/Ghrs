import React from "react";

class ProductCard extends React.Component {

  render() {
    return (                
        <div>
            <h3>Perfect for your Veteran&#x27;s Day Needs</h3>
            <div className="row">
                <div className="column"><img src="https://bit.ly/2OhJa1y" className="rounded" alt="..."/></div>
                <div className="column"><img src="https://bit.ly/2ycJrca" className="rounded" alt="..."/></div>
                <div className="column"><img src="https://bit.ly/2OhJa1y" className="rounded" alt="..."/></div>
            </div>
            
        </div>
    );
  }
}

export default ProductCard;
//<img src="https://bit.ly/2OhJa1y" className="rounded float-left" alt="..."/>