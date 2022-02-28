import React from 'react';
import './PaymentTerms.scss';
import bottomContainer from '../../assets/images/Group 8.jpg';

const PaymentTerms = () => {
    return (
        <div className="payment-terms">
            <div className="payment-terms__title">
                <h4>PAYMENT TERMS</h4>
                <br/>
            </div>
            <section id="conference-timeline">
                <div className="conference-center-line"></div>
                <div className="conference-timeline-content">
                    <div className="timeline-article">
                        <div className="content-left-container">
                            <div className="content-left">
                                <p style={{fontSize:18,color: "#A7A3A4",borderBottom:"2px dashed black"}}>Upon Reservation</p>
                            </div>
                        </div>
                        <div className="content-right-container">
                            <div className="content-right">
                                <p style={{fontSize:14,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:24,color: "#452129",fontWeight:"bold"}}>5%</span><br/>of the unit price</p>
                            </div>
                        </div>
                        <div className="meta-date">
                        </div>
                    </div>

                    <div className="timeline-article">
                        <div className="content-left-container">
                            <div className="content-left">
                                <p style={{fontSize:18,color: "#A7A3A4",borderBottom:"2px dashed black"}}>Upon Signing the SPA<br/>(30 Days from reservation)</p>
                            </div>
                            <div className="meta-date">
                            </div>
                        </div>
                        <div className="content-right-container">
                            <div className="content-right">
                                <p style={{fontSize:14,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:24,color: "#452129",fontWeight:"bold"}}>15% + 4% DLD FEE</span><br/>+50% Of the Furnishing Price + VAT</p>
                            </div>

                        </div>
                    </div>

                    <div className="timeline-article">
                        <div className="content-left-container">
                            <div className="content-left">
                                <p style={{fontSize:18,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:36,color: "#CFA87A",fontWeight:"bold"}}>40%</span><br/>Construction</p>
                            </div>
                        </div>
                        <div className="content-right-container">
                            <div className="content-right">
                                <p style={{fontSize:14,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:24,color: "#452129",fontWeight:"bold"}}>10%</span><br/>+10% Of the Furnishing Price + VAT</p>
                            </div>
                        </div>
                        <div className="meta-date">
                        </div>
                    </div>
                    <div className="timeline-article">
                        <div className="content-left-container">
                            <div className="content-left">
                                <p style={{fontSize:18,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:36,color: "#CFA87A",fontWeight:"bold"}}>60%</span><br/>Construction</p>
                            </div>
                        </div>
                        <div className="content-right-container">
                            <div className="content-right">
                                <p style={{fontSize:14,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:24,color: "#452129",fontWeight:"bold"}}>10%</span><br/>+10% Of the Furnishing Price + VAT</p>
                            </div>
                        </div>
                        <div className="meta-date">
                        </div>
                    </div>
                    <div className="timeline-article">
                        <div className="content-left-container">
                            <div className="content-left">
                                <p style={{fontSize:18,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:36,color: "#CFA87A",fontWeight:"bold"}}>80%</span><br/>Construction</p>
                            </div>
                        </div>
                        <div className="content-right-container">
                            <div className="content-right">
                                <p style={{fontSize:14,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:24,color: "#452129",fontWeight:"bold"}}>10%</span><br/>+10% Of the Furnishing Price + VAT</p>
                            </div>
                        </div>
                        <div className="meta-date">
                        </div>
                    </div>
                    <div className="timeline-article">
                        <div className="content-left-container">
                            <div className="content-left">
                                <p style={{fontSize:18,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:36,color: "#CFA87A",fontWeight:"bold"}}>100%</span><br/>Construction</p>
                            </div>
                        </div>
                        <div className="content-right-container">
                            <div className="content-right">
                                <p style={{fontSize:14,color: "#A7A3A4",borderBottom:"2px dashed black"}}><span style={{fontSize:24,color: "#452129",fontWeight:"bold"}}>50%</span><br/>+20% Of the Furnishing Price + VAT</p>
                            </div>
                        </div>
                        <div className="meta-date">
                        </div>
                    </div>
                </div>

            </section>
            <div className="timeline-end">Expected Completion <br/>Q4 2023</div>
            <div className="download-brochure"><p>You can download here <br/>availability & pricing brochure</p>
                <button>Download</button>
            </div>
            <div className="bottom-container">
                <img src={bottomContainer}></img>
            </div>
        </div>
    );
};

export default PaymentTerms;