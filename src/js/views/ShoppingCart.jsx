import React from 'react';
//import Validator from 'validator';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class ShoppingCart extends React.Component {
    render(){
        return(
        
            <div className="container">
                <table id="cart" className="table table-hover table-condensed">
                    <thead>
                        <tr>
                            <th style={{width: '50%'}}>Product</th>
                            <th style={{width: '10%'}} className="text-center">Price</th>
                            <th style={{width: '10%'}} className="text-center">Quantity</th>
                            <th style={{width: '20%'}} className="text-center">Subtotal</th>
                            <th style={{width: '10%'}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-th="Product">
                                <div className="text-left">
                                    <img src="http://placehold.it/100x100" alt="..." className="img-responsive rounded" />
                                    <small className = "text-right"> is a potato</small>
                                </div>  
      
                                
                                
                            </td>
                            <td data-th="Price">$69.69</td>
                            <td data-th="Quantity">
                                <input type="number" className= "form-control text-center" value="1"></input>
                            </td>
                            <td data-th="Subtotal" className="text-center">$69.69</td>
                            <td className="actions" data-th="">
                                <button className="btn btn-danger btn-sm"><i className="far fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="5" className = "text-right"><strong>Total: $69.69</strong></td>
                        </tr>
                        <tr>
                            <td>
                                <Link to ="/generalhotel"><button className="btn btn-outline-dark">Continue Shopping </button></Link>
                            </td>
                            <td colSpan="2" className="hidden-xs"></td>
                            
                            <td>
                                <Link to ="/generalhotel"><button className="btn btn-dark">Checkout</button></Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            );
    }
}


export default ShoppingCart;
