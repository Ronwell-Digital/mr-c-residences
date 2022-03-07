import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import '../Contact/Contact.scss';
import brochure1 from '../../assets/brochures/Main.pdf';
import brochure2 from '../../assets/brochures/Private Office.pdf';
import brochure3 from '../../assets/brochures/Residences.pdf';
import alertify from "alertifyjs"
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Contact = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [number, setNumber] = useState("");
    const [adress, setAdress] = useState("");
    const [showForm,setShowForm] = useState(true);
    const [showBtn, setShowBtn] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(db, "records"), {
                name: name,
                lastName: lastName,
                mail: mail,
                number: number,
                adress: adress
            });
            alertify.success("Sign Up Successful");
        } catch (err) {
            alert(err);
        }
        setName("");
        setLastName("");
        setMail("");
        setNumber("");
        setAdress("");
        setShowBtn(true);
        setShowForm(false);
    };

  return (
        <div className="container">
            <div className="wrapper animated bounceInLeft">
                <div className="company-info">
                    <h2>Get in touch <br/> with us :</h2>
                    <p>Fill up the form and our team will get <br/> back to you within 24 hours</p>
                    <h3 style={{textAlign:"center",color: "#452129",fontWeight:"bold",letterSpacing:2}}>BROCHURES</h3>
                    {showBtn == true ? <div className="brochures">

                        <a href={brochure1}download="Peninsula Main Brochure" className="download-btn">Main</a>
                        <a href={brochure2}download="Peninsula One Brochure" className="download-btn">Private Office</a>
                        <a href={brochure3}download="Peninsula Two Brochure" className="download-btn">Residences</a>
                    </div> : null}
                </div>
                <div className="contact">
                    <form>
                        <p>
                            <label>First Name</label>
                            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name"/>
                        </p>
                        <p>
                            <label>Last Name</label>
                            <input type="text" name="last name" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                        </p>
                        <p>
                            <label>Email</label>
                            <input type="email" name="email" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="E-Mail"/>
                        </p>
                        <p id="phone-area">
                            <label>Number</label>
                            <PhoneInput
                                className="phone-input"
                                id="phone-input"
                                country={'us'}
                                value={number}
                                onChange={number => setNumber(number)}
                            />
                        </p>
                        <p className="full">
                            <label>Adress</label>
                            <input type="text" onChange={(e) => setAdress(e.target.value)} value={adress}></input>
                        </p>
                        <p className="full wow fadeInUp">
                            <button onClick={handleSubmit}>Submit ⇾</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
  );
};

export default Contact;