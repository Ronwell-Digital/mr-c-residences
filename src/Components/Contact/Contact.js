import React from "react";
import '../Contact/Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
        <div className="col-left">
                <h1 className="contact__title">Contact</h1>
            <h2>Get in touch <br/> with us :</h2>
            <p>Fill up the form and our team will get <br/> back to you within 24 hours</p>
        </div>
        <div className="col-right">
            <div className="row1">
            <div className="box1">
                <h5>First Name</h5>
                <input type="text" placeholder="First Name" />
            </div>
                <div className="box2">
                    <h5>Last Name</h5>
                    <input type="text" placeholder="Last Name" />
                </div>
            </div>
            <div className="row2">
                <div className="box1">
                    <h5 id="email">E-Mail</h5>
                    <input type="text" placeholder="E-Mail" />
                </div>
                <div className="box2">
                    <h5 id="number">Phone Number</h5>
                    <input type="text" placeholder="Phone Number" />
                </div>
            </div>
            <div className="row3">
                <h5 id="adress">Adress</h5>
                <input type="text"/>
            </div>
            <div className="row4">
                <button id="button">Submit</button>
            </div>
        </div>

    </div>
  );
};

export default Contact;