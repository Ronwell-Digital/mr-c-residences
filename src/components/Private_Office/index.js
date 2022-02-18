import React, {useState} from "react";
import '../Private_Office/private_office.scss'
import private_office from '../../assets/images/private office.PNG'
import app from '../../assets/images/app.PNG'
import {Col, Container, Row} from "reactstrap";

const Private_Office = () => {
    const [variant1,setVariant1] = useState(false);
    const [variant2,setVariant2] = useState(false);
    const [variant3,setVariant3] = useState(false);
    const [variant4,setVariant4] = useState(false);

    const Variant1Click = () => {
        setVariant1(true);
        setVariant2(false);
        setVariant3(false);
        setVariant4(false);
    }
    const Variant2Click = () => {
        setVariant1(false);
        setVariant2(true);
        setVariant3(false);
        setVariant4(false);
    }
    const Variant3Click = () => {
        setVariant1(false);
        setVariant2(false);
        setVariant3(true);
        setVariant4(false);
    }
    const Variant4Click = () => {
        setVariant1(false);
        setVariant2(false);
        setVariant3(false);
        setVariant4(true);
    }
    return (
        <div className="private-office">
            <Container>
                <Row>
                    <Col xs="6">
                        <div className="office-intro">
                            <img src={private_office}></img><h3>MR C RESIDENCES GLOBAL PRIVATE OFFICE</h3>
                        </div>
                    </Col>
                    <Col xs="6">
                        <div className="route-links">
                            <div className="overview">
                            <button onClick={Variant1Click}>OVERVIEW</button>
                            {variant1 == true ?
                                <p>The Mr C Private Office will provide residents
                                    of Mr C Jumeirah with personal, private
                                    and impeccable support, wherever they
                                    travel in the world.
                                </p>
                                :null}
                            </div>
                            <div className="overview">
                                <button onClick={Variant2Click}>WHAT THEY DO</button>
                                {variant2 == true ?
                                    <p>Your Private Office can organize:
                                        Travel advisory, booking and local fixer support
                                        Private & business transport & logistics
                                        Event planning - venue, chef/sommelier
                                        and entertainment sourcing
                                        Wellness, nutritional therapy
                                        & personal training experts
                                        Restaurant recommendations and bookings
                                        Sourcing private staff - nannies/chefs/assistants
                                        Art investment advisory
                                        Private Members’ Club application support
                                        Exclusive access to events, art fairs and fashion weeks
                                    </p>
                                    :null}
                            </div>
                            <div className="overview">
                                <button onClick={Variant3Click}>THE MR C JUMEIRAH APP</button>
                                {variant3 == true ?
                                    <img src={app}></img>
                                    :null}
                            </div>
                            <div className="overview">
                                <button onClick={Variant4Click}>HOW DO I LOG
                                    A REQUEST?</button>
                                {variant4 == true ?
                                    <p>Residents can log a request from
                                        anywhere in the world by:
                                        Logging a request on the Mr C App
                                        Sending an email to
                                        privateoffice@mrcresidencesjumeirah.com
                                    </p>
                                    :null}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Private_Office;