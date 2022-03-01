import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import '../Contact/Contact.scss';
import brochure1 from '../../assets/brochures/Main.pdf';
import brochure2 from '../../assets/brochures/Private Office.pdf';
import brochure3 from '../../assets/brochures/Residences.pdf';

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
    <div className="contact">
        <div className="col-left">
                <h1 className="contact__title">Contact</h1>
            <h2>Get in touch <br/> with us :</h2>
            <p>Fill up the form and our team will get <br/> back to you within 24 hours</p>
            {showBtn == true ? <div className="brochures">
                <a href={brochure1}download="Peninsula Main Brochure" className="download-btn">Main</a>
                <a href={brochure1}download="Peninsula One Brochure" className="download-btn">Private Office</a>
                <a href={brochure3}download="Peninsula Two Brochure" className="download-btn">Residences</a>
            </div> : null}
        </div>
        <div className="col-right">
            <form>
            <div className="row1">
            <div className="box1">
                <h5>First Name</h5>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="First Name" />
            </div>
                <div className="box2">
                    <h5>Last Name</h5>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                </div>
            </div>
            <div className="row2">
                <div className="box1">
                    <h5 id="email">E-Mail</h5>
                    <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="E-Mail" />
                </div>
                <div className="box2">
                    <h5 id="number">Phone Number</h5>
                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Phone Number" />
                </div>
            </div>
            <div className="row3">
                <h5 id="adress">Adress</h5>
                <input type="text" onChange={(e) => setAdress(e.target.value)} value={adress}/>
            </div>
            <div className="row4">
                <button id="button"  onClick={handleSubmit}>Submit</button>
            </div>
            </form>
        </div>
    </div>
  );
};

export default Contact;