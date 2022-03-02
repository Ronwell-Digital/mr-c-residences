import React from 'react';
import './PaymentTerms.scss';
import bottomContainer from '../../assets/images/Group 8.jpg';
import payment from '../../assets/images/payment.svg';

const PaymentTerms = () => {
    return (
        <div className="payment-terms">
            <section id="conference-timeline">
                <a href="/"><img src={payment}></img></a>
            </section>
            <div className="download-brochure">
                <button>Download</button>
            </div>
            <div className="bottom-container">
                <img src={bottomContainer}></img>
            </div>
        </div>
    );
};

export default PaymentTerms;