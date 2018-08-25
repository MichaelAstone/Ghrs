import React from "react";

class Checkbox extends React.Component {

  render() {
    return (                
        <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
            <label className="form-check-label" htmlFor="exampleCheck1">Remember Me?</label>
        </div>
    );
  }
}

export default Checkbox;