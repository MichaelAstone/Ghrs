
import React from 'react';

class Footer extends React.Component{
    render(){
         return (<div >
           
             <div className="container fixed-bottom">
                 <div className="nav justify-content-center ">
                     <div className="nav-item ">
                         <a className="nav-link active textColor" href="https://www.generalhotel.com/about-us/">About Us</a>
                     </div>
                     <div className="nav-item ">
                         <a className="nav-link textColor" href="#">Contact Us</a>
                     </div>
                     <div className="nav-item  ">
                         <a className="nav-link textColor" href="#">Track Order</a>
                     </div>

                 </div>
                 <div>
                     <div className="container justify-content-center">
                         <div className="row justify-content-center" >
                             <div className="credit-card-box">
                                 <div className="row display-tr" >
                                     <a className="display-td textWeaccept">We Accept</a>
                                     <div className="display-td" >
                                         <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"></img>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>);


  }
}



export default Footer;
