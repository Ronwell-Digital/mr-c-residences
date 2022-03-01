import "./whatTheyDo.scss";
export default function WhatTheyDo() {
  const leftClick = () => {};
  const rightClick = () => {
    console.log("right click");
    let elem = document.querySelector(".right-side");
    elem.style.left = elem.style.left + 10 + "px";
  };
  return (
    <div className="whatTheyDo">
      <div className="left-side">
        <div className="header-title-wrapper ">
          <h1 className="title">What They Do</h1>
          <span className="line"></span>
        </div>
        <p className="text"> Your Private Office can organize:</p>
        <button onClick={() => leftClick()}>left</button>
        <button onClick={() => rightClick()}>right</button>
      </div>
      <div className="right-side">
        <div className="item"> item 1 </div>
        <div className="item"> item 2 </div>
        <div className="item"> item 3 </div>
        <div className="item"> item 4 </div>
        <div className="item"> item 5 </div>
        <div className="item"> item 7 </div>
        <div className="item"> item 2 </div>
        <div className="item"> item 3 </div>
        <div className="item"> item 4 </div>
        <div className="item"> item 5 </div>
        <div className="item"> item 7 </div>
      </div>
    </div>
  );
}
