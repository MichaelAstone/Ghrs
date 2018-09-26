import React from 'react';

class RatingStar extends React.Component{
    constructor(){
        super();
        this.state = {
            rating: 0
         
        };
    }
    
    setRating(value){
        this.setState({rating: value});
        console.log(value);
    }
    
    render(){
        let stars = [];
        let maxRating = 5;
        
        for (let i = 0; i < maxRating; i = i + 1){
            let selected = '';
            if (this.state.rating > i){
                selected = 'fas fa-star';
                stars.push(selected);
            } else {
                selected = 'far fa-star';
                stars.push(selected);
            }
            
           
                
                
  
        return(
            <div>
                <h1> Hello World </h1>
                <span 
                style = {{cursor : 'pointer'}}
                className = {selected} 
                onClick = {() => this.setRating(0)}
                key = {0}
                >
                </span>
                
                <span 
                style = {{cursor : 'pointer'}}
                className = {selected} 
                onClick = {() => this.setRating(1)}
                key = {1}
                >
                </span>
                
                <span 
                style = {{cursor : 'pointer'}}
                className = {selected} 
                onClick = {() => this.setRating(2)}
                key = {2}
                >
                </span>
                
                <span 
                style = {{cursor : 'pointer'}}
                className = {selected} 
                onClick = {() => this.setRating(3)}
                key = {3}
                >
                </span>
                
                <span 
                style = {{cursor : 'pointer'}}
                className = {selected} 
                onClick = {() => this.setRating(4)}
                key = {4}
                >
                </span>
            </div>
            
            );
        }
    }
}

export default RatingStar;