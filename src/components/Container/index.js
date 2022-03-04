import "./container.scss";
export default function Container({ style, children }) {
  return (
    <div className="mycontainer" style={style}>
      {children}
    </div>
  );
}
