import React, {useState} from "react";
import '../Residences/residences.scss'
import Variant1 from '../../assets/images/residences/variant1.PNG'
import Variant2 from '../../assets/images/residences/Variant2.PNG'
import Variant3 from '../../assets/images/residences/Variant3.PNG'
import Variant4 from '../../assets/images/residences/Variant4.PNG'

import image1 from '../../assets/images/live spaces.PNG'
import image2 from '../../assets/images/kitchen.PNG'
import image3 from '../../assets/images/master bedroom.PNG'
import image4 from '../../assets/images/master bathroom.PNG'
import image5 from '../../assets/images/terrace.PNG';
import {Col, Container, Row} from "reactstrap";

const Residences = () => {
    const  [variant, setVariant] = useState(false);
    const  [variant1,setVariant1] = useState(false);
    const  [variant2,setVariant2] = useState(false);
    const  [variant3,setVariant3] = useState(false);
    const  [variant4,setVariant4] = useState(false);

    const Variant1Click = (e) => {
        e.preventDefault();
        setVariant1(true);
        setVariant2(false);
        setVariant3(false);
        setVariant4(false);
    }

    const Variant2Click = (e) => {
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
    return(

         <div className="residences">
             <div className="residences-desc">
             <h1>RESİDENCES</h1>
             <p>Mr. C Residences in Coconut Grove is home to those who gravitate towards the finer things. Those who live their lives with an inherent sense of style and believe that simplicity is the ultimate sophistication. It is for those who understand that it is the little things—the details —that make all the difference.</p>
                 <button>Download Brochure</button>
             </div>

             <div className="links">
                 <p style={{fontSize:20,paddingRight:"1%",paddingTop:"1%"}}>Select House Type:</p><br/>
                 <button onClick={Variant1Click}>RESİDENCES</button>
                 <button onClick={Variant2Click}>TOWNHOUSE</button>
                 <button onClick={Variant3Click}>PENTHOUSE</button>
                 <button onClick={Variant4Click}>DUPLEX PENTHOUSE</button>
             </div>
             <div className="box">
                 {  variant1 == true ?
                 <Container>
                     <Row>
                         <Col xs="4">
                             <div className="residences-txt">
                                 <h2>RESİDENCES</h2>
                                 <span>3 BED/ 3.5 BATH</span>
                                 <ul>
                                     <li>living spaces </li>
                                     <li>kitchen</li>
                                     <li>master bedroom</li>
                                     <li>master bathroom</li>
                                     <li>terrace</li>
                                 </ul>
                             </div>
                         </Col>
                         <Col xs="8">

                                 <div className="box-1">
                                     <div className="residences-info">
                                         <Container>
                                             <Row>
                                                  <Col xs="3">
                                                      <img src={image1}></img>
                                                      <img src={image2}></img>
                                                  </Col>

                                                 <Col xs="3">
                                                     <img src={image3}></img>
                                                     <img src={image4}></img>
                                                 </Col>
                                                 <Col xs="6">
                                                     <img src={Variant1} style={{borderRadius:"4px",marginBottom:10}}></img>
                                                 </Col>
                                             </Row>
                                         </Container>
                                     </div>
                                 </div>
                         </Col>
                     </Row>
                 </Container> :null}

                 {variant2 == true ?
                     <Container>
                         <Row>
                             <Col xs="4">
                                 <div className="residences-txt">
                                     <h2>TOWNHOUSE</h2>
                                     <span>4BED/4.5BATH</span>
                                     <ul>
                                         <li>living spaces </li>
                                         <li>kitchen</li>
                                         <li>master bedroom</li>
                                         <li>master bathroom</li>
                                         <li>terrace</li>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs="8">

                                 <div className="box-1">
                                     <div className="residences-info">
                                         <Container>
                                             <Row>
                                                 <Col xs="3">
                                                     <img src={image1}></img>
                                                     <img src={image2}></img>
                                                 </Col>

                                                 <Col xs="3">
                                                     <img src={image3}></img>
                                                     <img src={image4}></img>
                                                 </Col>
                                                 <Col xs="6">
                                                     <img src={Variant2} style={{borderRadius:"4px",marginBottom:10}}></img>
                                                 </Col>
                                             </Row>
                                         </Container>
                                     </div>
                                 </div>
                             </Col>
                         </Row>
                     </Container> :null}

                 {variant3 == true ?
                     <Container>
                         <Row>
                             <Col xs="4">
                                 <div className="residences-txt">
                                     <h2>PENTHOUSE</h2>
                                     <span>5BED/5.5BATH</span>
                                     <ul>
                                         <li>living spaces </li>
                                         <li>kitchen</li>
                                         <li>master bedroom</li>
                                         <li>master bathroom</li>
                                         <li>terrace</li>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs="8">

                                 <div className="box-1">
                                     <div className="residences-info">
                                         <Container>
                                             <Row>
                                                 <Col xs="3">
                                                     <img src={image1}></img>
                                                     <img src={image2}></img>
                                                 </Col>

                                                 <Col xs="3">
                                                     <img src={image3}></img>
                                                     <img src={image4}></img>
                                                 </Col>
                                                 <Col xs="6">
                                                     <img src={Variant3} style={{borderRadius:"4px",marginBottom:10}}></img>
                                                 </Col>
                                             </Row>
                                         </Container>
                                     </div>
                                 </div>
                             </Col>
                         </Row>
                     </Container> :null}
                 {variant4 == true ?
                     <Container>
                         <Row>
                             <Col xs="4">
                                 <div className="residences-txt">
                                     <h2>DUPLEX PENTHOUSE</h2>
                                     <span>6 BED/ 6 FULL BATH/ 2 HALF BATH</span>
                                     <ul>
                                         <li>living spaces </li>
                                         <li>kitchen</li>
                                         <li>master bedroom</li>
                                         <li>master bathroom</li>
                                         <li>terrace</li>
                                     </ul>
                                 </div>
                             </Col>
                             <Col xs="8">

                                 <div className="box-1">
                                     <div className="residences-info">
                                         <Container>
                                             <Row>
                                                 <Col xs="3">
                                                     <img src={image1}></img>
                                                     <img src={image2}></img>
                                                 </Col>

                                                 <Col xs="3">
                                                     <img src={image3}></img>
                                                     <img src={image4}></img>
                                                 </Col>
                                                 <Col xs="6">
                                                     <img src={Variant4} style={{borderRadius:"4px",marginBottom:10}}></img>
                                                 </Col>
                                             </Row>
                                         </Container>
                                     </div>
                                 </div>
                             </Col>
                         </Row>
                     </Container> :null}

             </div>
         </div>
 )
}

export default Residences;