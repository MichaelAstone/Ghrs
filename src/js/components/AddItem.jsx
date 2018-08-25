import React from "react";

class AddItem extends React.Component {
    constructor(){
        super();
        
        this.state = { 
            count: 0
    };
    }
    
    handleIncrement(){
        //this.state.count++;({this.state.count})
        this.setState({count: this.state.count + 1});
    }
    
    handleDecrement(){
        this.setState({count: this.state.count - 1});
    }
    
    
  render() {
    return (                
        <div>
            <button
             onClick = {() => this.handleIncrement()}
             className="fas fa-plus" style={{cursor: 'pointer', display: 'block', height: '15px', width: '30px', fontSize: '8px'}}
             > 
             
            </button>
            <span style={{display:'block'}}>  {this.state.count}</span>
            <button
             onClick = {() => this.handleDecrement()}
             className="fas fa-minus" style={{cursor: 'pointer', disply: 'block', height: '15px', width: '30px', fontSize: '8px'}}
             > 
            </button>
        </div>
    );
  }
}


export default AddItem;