import MrcMan from "../../assets/svgs/MrcMan";
import "./divider.scss";
export default function Divider() {
  return (
    <div className="divider-wrapper">
      <span className="divider-line" />
      <MrcMan width="43px" height="80px" />
      <span className="divider-line" />
    </div>
  );
}
