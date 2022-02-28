import React from "react";
import '../Footer/Footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h3 style={{textAlign:"center"}}>Mr.C REDIDENCES</h3>
                    <p style={{textAlign:"center"}}>In 1931, on a tiny street off of Venice’s magnificent Piazza San Marco, Giuseppe Cipriani opened Harry’s Bar. In the decades that followed, its welcoming atmosphere and thoughtful attention to detail made this intimate space an iconic destination for stylish locals and international visitors, including a who’s who of European royalty, literary figures and global celebrities.</p>
                    <span style={{textAlign:"center",marginBottom:10}}>Mr. C Residences Jumeirah, St 24C, Jumeirah 2, Dubai Canal.</span>
                    <span style={{textAlign:"center"}}>+971 4 455 0830</span>
                    <img></img>
                </div>
                <div className="footer-content-right">
                    <h3>Site Map</h3>
                    <ul className="route-links">
                        <li><a>About</a></li>
                        <li><a>What They Do</a></li>
                        <li><a>Your Mobile Assistant</a></li>
                        <li><a>Floor Plans</a></li>
                        <li><a>Payment Terms</a></li>
                        <li><a>Inspiration</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="footer-content-right2">
                    <h3>Downloads</h3>
                    <div className="section1">
                        <p>Download our residence brochure and review all residences</p>
                        <button>Download Brochure</button>
                    </div>
                    <div className="section2">
                        <p>Download our price and availability brochure</p>
                        <button>Download Brochure</button>
                    </div>
                </div>
                </div>
        </div>
    )
}

export default Footer;