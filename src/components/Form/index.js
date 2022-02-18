import React, { useState } from "react";
import "../Form/form.scss";
import { Col, Container, Row } from "reactstrap";
import Main from '../../assets/brochures/Main.pdf'
import Private_Office from '../../assets/brochures/Private Office.pdf'
import Residences from "../../assets/brochures/Residences.pdf";


const Form = () => {
    const [name, setName] = useState();
    const [mail, setMail] = useState();
    const [number, setNumber] = useState();
    const [showForm,setShowForm] = useState(true);
    const [showBtn, setShowBtn] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setName("");
        setMail("");
        setNumber("");
        setShowBtn(true);
        setShowForm(false);
    };

    return (
        <div id="userForm">
            <section id="userform">
                <div className="userform-box">
                    <div className="userform-links">
                        <h2>
                            GET A DOWNLOAD <br /> BROCHURE
                        </h2>
                    </div>
                    <div className="userform-form-wrapper">
                        <form>
                            {showForm == true ?
                                <div>
                                    <h2>SİGN UP</h2>
                                    <div className="form-item">
                                        <input
                                            type="text"
                                            name="sender"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <label>Name:</label>
                                    </div>
                                    <div className="form-item">
                                        <input
                                            type="text"
                                            name="email"
                                            value={mail}
                                            onChange={(e) => setMail(e.target.value)}
                                            required
                                        />
                                        <label>Email:</label>
                                    </div>
                                    <div className="form-item">
                <textarea
                    className=""
                    name="message"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                ></textarea>
                                        <label>Call Number:</label>
                                    </div>
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="submit-btn"
                                    >
                                        Save
                                    </button>
                                </div>:null}
                            {showBtn == true ?
                                <div className="download-file">
                                    <Container>
                                        <h3 style={{textAlign:"center",paddingBottom:10}}>BROCHURES</h3>
                                        <Row>
                                            <Col xs="4">
                                                <a href={Main} download="Mr C Main Brochure" className="intro-btn" color="warning">Main Brochure</a>
                                            </Col>
                                            <Col xs="4">
                                                <a href={Private_Office} download="Mr C Private Office Brochure" className="intro-btn" color="warning">Peninsula One</a>
                                            </Col>
                                            <Col xs="4">
                                                <a href={Residences} download="Mr C Residences Brochure" className="intro-btn" color="warning">Peninsula One</a>
                                            </Col>
                                        </Row>

                                    </Container>
                                </div>:null}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Form;