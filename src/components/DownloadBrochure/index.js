import MrcMan from "../../assets/svgs/MrcMan";
import Pattern from "../../assets/svgs/Pattern";
import { img1 } from "../../assets/images/HeroImage";
import "./downloadBrochure.scss";
export default function DownloadBrochure() {
  return (
    <div
      className="download-brochure"
      style={{
        backgroundImage: `linear-gradient(90deg, #452129 55%, rgba(69, 33, 41, 0) 90%), url(${img1})`,
      }}
    >
      <Pattern />
      <div className="download-brochure__content">
        <div className="download-brochure__text">
          <h1 className="content-title">
            View Our Brochure <MrcMan />
          </h1>
          <button className="download-btn">Download</button>
        </div>
      </div>
    </div>
  );
}
