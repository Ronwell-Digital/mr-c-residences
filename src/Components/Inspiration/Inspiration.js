import React from 'react';
import "./Inspiration.scss"
import card1 from '../../assets/images/card1.jpg';
import card2 from '../../assets/images/card2.jpg';
import card3 from '../../assets/images/card3.jpg';
import card4 from '../../assets/images/card4.jpg';
import card5 from '../../assets/images/card5.jpg';
import card6 from '../../assets/images/card6.jpg';
import card7 from '../../assets/images/card7.jpg';
import bottomContainer from "../../assets/images/Group 8.jpg";

const Inspiration = () => {
    return(
        <div className="inspiration">
            <div className="inspiration__title">
                <h2>INSPIRATION</h2>
            </div>
            <div className="inspiration__cards" id="top-cards">
                <div className="inspiration__card">
                        <div className="inspiration__card">
                            <img src={card1} alt=""/>
                            <div className="inspiration__card__info">
                                <h5>Madonna</h5>
                                <p>Tickets to Sold Out Events</p>
                                </div>
                        </div>
                </div>
                        <div className="inspiration__card">
                            <img src={card2} alt=""/>
                            <div className="inspiration__card__info">
                                <h5>La Paloma - Ibiza</h5>
                                <p>Last Minute Restaurant Reservations</p>
                            </div>
                </div>
                        <div className="inspiration__card">
                            <img src={card3} alt=""/>
                            <div className="inspiration__card__info">
                                <h5>Miami Art Basel</h5>
                                <p>Art Fairs</p>
                            </div>
                        </div>
                        <div className="inspiration__card">
                            <img src={card4} alt=""/>
                            <div className="inspiration__card__info">
                                <h5>50th birthday party in Harbor İsland</h5>
                                <p>Events</p>
                            </div>
                        </div>
            </div>
            <div className="inspiration__cards" id="bottom-cards">
                <div className="inspiration__card">
                    <div className="inspiration__card">
                        <img src={card1} alt=""/>
                        <div className="inspiration__card__info">
                            <h6>50th birthday party in Harbor İsland</h6>
                            <p>Events</p>
                        </div>
                    </div>
                </div>
                <div className="inspiration__card">
                    <img src={card2} alt=""/>
                    <div className="inspiration__card__info">
                        <h6>50th birthday party in Harbor İsland</h6>
                        <p>Events</p>
                    </div>
                </div>
                <div className="inspiration__card">
                    <img src={card7} alt=""/>
                    <div className="inspiration__card__info">
                        <h6>50th birthday party in Harbor İsland</h6>
                        <p>Events</p>
                    </div>
                </div>
                <div className="inspiration__card">
                    <img src={card6} alt=""/>
                    <div className="inspiration__card__info">
                        <h6>50th birthday party in Harbor İsland</h6>
                        <p>Events</p>
                    </div>
                </div>
                <div className="inspiration__card">
                    <img src={card5} alt=""/>
                    <div className="inspiration__card__info">
                        <h6>50th birthday party in Harbor İsland</h6>
                        <p>Events</p>
                    </div>
                </div>
            </div>
            <div className="bottom-container">
                <img src={bottomContainer}></img>
            </div>
        </div>
    )
}

export default Inspiration;