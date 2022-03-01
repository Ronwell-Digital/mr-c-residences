import { heroimage } from "../../assets/images/HeroImage";
import Pattern from "../../assets/svgs/Pattern";
import About from "../About";
import Header from "../Header";
import "./hero.scss";
export default function Hero({ children }) {
  return (
    <div
      className="hero-area"
      style={{
        backgroundImage: `linear-gradient(0deg, #452129 50%, rgba(69, 33, 41, 0) 92.75%), url(${heroimage}) `,
      }}
    >
      <Header />
      <div className="hero-content">
        <p className="hero-text">
          Discover <br />
          your global <br />
          private office.
        </p>
      </div>
      <Pattern />
      <About />
    </div>
  );
}
