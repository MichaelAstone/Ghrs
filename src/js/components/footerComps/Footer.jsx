
//
//
//              <div className="container navbar-fixed-bottom">
//                  <FooterNavBar />
//                  <div className="nav justify-content-center ">
//                      <div className="nav-item ">
//                          <a className="nav-link active textColor" href="https://www.generalhotel.com/about-us/">About Us</a>
//                      </div>
//                      <div className="nav-item ">
//                          <a className="nav-link textColor" href="https://www.generalhotel.com/contact-us/">Contact Us</a>
//                      </div>
//                      <div className="nav-item  ">
//                          <a className="nav-link textColor" href="#">Track Order</a>
//                      </div>
//
//                  </div>
//                  <div className="footer-social-icons container ">
//
//                      <div className="social-icons row justify-content-center" >
//                          <div >
//                              <a href="" className="social-icon "> <i className="fa fa-facebook fa-1.8x col-2"></i></a></div>
//                          <div><a href="" className="social-icon"> <i className="fa fa-twitter fa-1.8x col-2"></i></a></div>
//                          <div><a href="" className="social-icon"> <i className="fa fa-rss fa-1.8x col-2"></i></a></div>
//                          <div><a href="" className="social-icon"> <i className="fa fa-youtube fa-1.8x col-2"></i></a></div>
//                          <div><a href="" className="social-icon"> <i className="fa fa-linkedin fa-1.8x col-2"></i></a></div>
//                          <div><a href="" className="social-icon"> <i className="fa fa-google-plus fa-1.8x col-2"></i></a></div>
//                      </div>
//                  </div>
//
//
//
//
//                  <div>
//
//                  <div>
//
//                                  <div className ="bGcoLorBlack">
//                                      <i className="fas fa-copyright gHRScolor"></i></div>
//                              </div>
//

import '../../../styles/footerStylesheet.scss';
import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(

            <Footer color="#1b5e20 green darken-4 "className="font-small pt-0">
                <Container>
                    <Row className="pt-5 mb-3 text-center d-flex justify-content-center">
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">About us</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">Products</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">Services</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">Help</a></h6>
                        </Col>
                        <Col md="2" className="b-3">
                            <h6 className="title font-weight-bold"><a href="#!">Contact</a></h6>
                        </Col>
                    </Row>
                    <hr className="rgba-white-light" style={{margin: '0 15%'}}/>
                    <Row className="d-flex text-center justify-content-center mb-md-0 mb-4">
                        <Col md="8" sm="12" className="mt-5">
                            <p style={{lineHeight: '1.7rem'}}>GHRS</p>
                        </Col>
                    </Row>
                    <div className="container justify-content-center">
                        <div className="row justify-content-center" >
                            <div className="credit-card-box">
                                <div className="row display-tr row justify-content-center" >
                                    <a className="display-td textWeaccept mt-2">We Accept</a>
                                    <div className="display-td" >
                                        <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="clearfix d-md-none rgba-white-light" style={{margin: '10% 15% 5%'}}/>
                    <Row className="pb-3">
                        <Col md="12">
                            <div className="mb-5 flex-center">
                                <a className="fb-ic"><i className="fa fa-facebook fa-lg white-text mr-md-4"> </i></a>
                                <a className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-4"> </i></a>
                                <a className="gplus-ic"><i className="fa fa-google-plus fa-lg white-text mr-md-4"> </i></a>
                                <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-4"> </i></a>
                                <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-4"> </i></a>
                                <a className="pin-ic"><i className="fa fa-pinterest fa-lg white-text"> </i></a>

                            </div>


                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="#"> General Hotel & Restaurant Supply Corp. -  All rights reserved.</a>
                    </Container>
                </div>

            </Footer>

        );
    }
}

export default FooterPage;
