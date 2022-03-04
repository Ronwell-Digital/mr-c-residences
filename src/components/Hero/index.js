import { useEffect } from "react";
import { heroimage } from "../../assets/images/HeroImage";
import Pattern from "../../assets/svgs/Pattern";
import About from "../About";
import Container from "../Container";
import Header from "../Header";
import LeftContainer from "../LeftContainer";
import "./hero.scss";
export default function Hero({ children }) {
  useEffect(() => {
    let el = document.querySelector(".hero-area");

    document.querySelector(".heroimg").style.height = window
      .getComputedStyle(el)
      .getPropertyValue("height");
  }, []);
  return (
    <div className="hero-area">
      <div
        className="heroimg"
        style={{
          backgroundImage: `linear-gradient(0deg, #452129 50%, rgba(69, 33, 41, 0) 92.75%), url(${heroimage}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: " cover 100vh",
        }}
      >
        <div className="hero-wrapper">
          <Container style={{ position: "relative", top: "50%" }}>
            <div className="hero-content">
              <p className="hero-text">
                Discover <br />
                your global <br />
                private office.
              </p>
            </div>
          </Container>
          <Pattern />
        </div>
        <About />
      </div>
    </div>
  );
}
