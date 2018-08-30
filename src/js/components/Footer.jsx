import FooterNavBar from '../components/FooterNavBar.jsx';

import React from 'react';

class Footer extends React.Component{
    render(){
         return (<div >
             <div className="footer-social-icons container ">

                 <div className="social-icons row justify-content-center" >
                     <div >
                         <a href="" className="social-icon "> <i className="fa fa-facebook fa-1.8x col-2"></i></a></div>
                     <div><a href="" className="social-icon"> <i className="fa fa-twitter fa-1.8x col-2"></i></a></div>
                     <div><a href="" className="social-icon"> <i className="fa fa-rss fa-1.8x col-2"></i></a></div>
                     <div><a href="" className="social-icon"> <i className="fa fa-youtube fa-1.8x col-2"></i></a></div>
                     <div><a href="" className="social-icon"> <i className="fa fa-linkedin fa-1.8x col-2"></i></a></div>
                     <div><a href="" className="social-icon"> <i className="fa fa-google-plus fa-1.8x col-2"></i></a></div>
                 </div>
             </div>


             <div className="container navbar-fixed-bottom">
                 <FooterNavBar />
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
                                 <div className="row display-tr row justify-content-center" >
                                     <a className="display-td textWeaccept">We Accept</a>
                                     <div className="display-td" >
                                         <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"></img>
                                     </div>
                                 </div>
                                 <div className ="bGcoLorBlack">
                                     <i className="fas fa-copyright gHRScolor">2018 General Hotel & Restaurant Supply Corp. -  All rights reserved.</i></div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>);


  }
}
Footer.propType= {

};


export default Footer;
