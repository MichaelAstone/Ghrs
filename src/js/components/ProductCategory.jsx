import React from 'react';



class ProductCategory extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

}

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"white",width:"320px", border: "solid 1px", margin: "30px auto", textAlign: "center"}} >
            <div className="button" onClick={this.showDropdownMenu}> Category </div>

            { this.state.displayMenu ? (
                <ul>
                    <li><a className="active" href="">item 1</a></li>
                    <li><a href="">item 2</a></li>
                    <li><a href="">item 3</a></li>
                   
                </ul>
        ):
        (
          null
        )
        }

        </div>

    );
  }
}

export default ProductCategory;