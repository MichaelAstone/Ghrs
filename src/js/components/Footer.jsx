import FooterNavBar from '../components/FooterNavBar.jsx';

import React from 'react';

class Footer extends React.Component{
    render(){
         return (<div >
             <div className="footer-social-icons container ">

                 <ul className="social-icons " >
                     <li className="list-style-type:none"><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                     <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                     <li><a href="" className="social-icon"> <i className="fa fa-rss"></i></a></li>
                     <li><a href="" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
                     <li><a href="" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
                     <li><a href="" className="social-icon"> <i className="fa fa-google-plus"></i></a></li>
                 </ul>
             </div>


             <div className="container fixed-bottom">
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
Footer.propType= {

};


export default Footer;
