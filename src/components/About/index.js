import HomePattern from "../../assets/svgs/HomePattern";
import MrcMan from "../../assets/svgs/MrcMan";
import "./about.scss";
export default function About() {
  return (
    <div className="about">
      <HomePattern
        style={{
          position: "relative",
          top: "0",
          bottom: "0",
          opacity: 0.8,
          height: "815px",
          overflow: "hidden",
        }}
      />

      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">About</h1>
          <span className="line"></span>

          <p className="about-text">
            The Mr C Private Office will provide residents of Mr C Jumeirah with
            personal, private and impeccable support, wherever they travel in
            the world. <br />
            <br />
            The Private Offices’ little black book of local experts in every
            country means they can sort your whole trip - from tailored advice
            and curated itineraries to luxury hospitality and exclusive access.
            <br />
            <br /> Your Global Private Office makes their service personal,
            getting to know your likes and dislikes, interests and passions, so
            they can recommend you restaurants, events and experiences that they
            know you’ll love.
          </p>
          <MrcMan />
        </div>

        <div className="image-wrapper">
          <img src={require("../../assets/images/img1.jpg")} alt="livingroom" />
        </div>
      </div>
    </div>
  );
}
