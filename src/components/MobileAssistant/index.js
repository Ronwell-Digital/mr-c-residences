import Container from "../Container";
import "./mobileAssistant.scss";
import {
  AmenityBooking,
  ResidenceInformation,
  VacationInspiration,
} from "../../assets/images/YourMobileAssistant";
const items = [
  {
    title: `Residence Information`,
    image: ResidenceInformation,
    description: "All the information about your home",
  },
  {
    title: `Amenity Booking`,
    image: AmenityBooking,
    description: "Booking Book the cinema, gym, kids adventure lab and more",
  },
  {
    title: `Vacation Inspiration`,
    image: VacationInspiration,
    description: "Ideas on where to go and what to do for your next adventure",
  },
];
export default function MobileAssistant() {
  return (
    <div className="mobile-assistant">
      <Container>
        <div className="mobile-assistant-title-container">
          <h1 className="mobile-assistant-title">Your mobile assistant</h1>
          <span className="line"></span>
        </div>
        <div className="mobile-assistant-content">
          {items.map((item, index) => {
            return (
              <div className="mobile-assistant-content-item" key={index}>
                <div className="mobile-assistant-content-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <h2 className="mobile-assistant-content-item-title">
                  {item.title}
                </h2>
                <p className="mobile-assistant-content-item-description">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
