import MrcMan from "../../assets/svgs/MrcMan";
import Pattern from "../../assets/svgs/Pattern";
import { img1 } from "../../assets/images/HeroImage";
import "./downloadBrochure.scss";
import Container from "../Container";
export default function DownloadBrochure() {
  return (
    <div
      className="download-brochure"
      style={{
        backgroundImage: ` url(${img1})`,
      }}
    >
      <div className="bg-wrapper">
        <Pattern
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "row",
            flexWrap: "wrap",
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
          }}
        />
        <Container
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div className="download-brochure__content">
            <div className="download-brochure__text">
              <h1 className="content-title">
                View Our Brochure <MrcMan />
              </h1>
              <button className="download-btn">Download</button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
