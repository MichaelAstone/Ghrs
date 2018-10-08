import React from 'react';
import { Link } from "react-router-dom";
import '../../styles/login.scss';


class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        };
    }
    
      handleChange(e){
        this.setState({[e.target.id]: e.target.value});
      }

      handleSubmit(e){
        event.preventDefault();
      }

    render(){
    return(<div className = "container-fluid" >
        <div>
            <h1 style = {{color: 'black'}}> Welcome.</h1>
            <h6 style = {{color: 'black'}}> GHRS. </h6>
        </div>    
        <div className="form-group">
            <label htmlFor="inputAddress">Email address</label>
            <input type="text" className="form-control" id="email" value={this.state.email} onChange={(e) => this.handleChange(e)}></input>
        </div>
        <div className="form-group">
            <label htmlFor="inputAddress2">Password</label>
            <input type="password" className="form-control" id="password" value={this.state.password} onChange={(e) => this.handleChange(e)}></input>
            <small id="passwordHelpBlock" className="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters.
            </small>
        </div>
        <div className="form-group">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                <label className="form-check-label" htmlFor="gridCheck">
                Keep me signed in
                </label>
            </div>
        </div>
        <hr></hr>
        <Link to ="/generalhotel"><button type="button" className="btn btn-dark btn-block mb-3">Sign In</button></Link>
        <Link to ="/register"><button type="button" className="btn btn-outline-dark btn-block">Create Account</button></Link>

    </div>
);
}
}

export default Login;
