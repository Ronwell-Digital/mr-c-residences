import React from 'react';
import '../Footer/footer.scss'
import logo from '../../assets/images/logo.jpg'


const Footer = () => {
    return <footer className="footer-section" id='contact'>
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>2640 S Bayshore Dr, Coconut Grove, FL 33133, United States</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>(305) 521-9120</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>Info@MrCResidencesCG.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="index.html"><img src={logo} style={{borderRadius:"5%"}} className="img-fluid" alt="logo" /></a>
                            </div>
                            <div className="footer-text">
                                <p>In 1931, on a tiny street off of Venice’s magnificent Piazza San Marco, Giuseppe Cipriani opened Harry’s Bar. In the decades that followed, its welcoming atmosphere and thoughtful attention to detail made this intimate space an iconic destination for stylish locals and international visitors, including a who’s who of European royalty, literary figures and global celebrities.</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#peninsulaone">Gallery</a></li>
                                <li><a href="#peninsulatwo">Residences</a></li>
                                <li><a href="#peninsulafive">Private Office</a></li>
                                <li><a href="#plans">Payment Plan</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Subscribe</h3>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <a href="https://codepen.io/anupkumar92/">Mr. C Residences</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
};

export default Footer;