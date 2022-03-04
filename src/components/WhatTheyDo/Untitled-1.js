{
  /***
export default function WhatTheyDo() {
  const leftClick = () => {
    // const slider = document.querySelector(".slider");
    // slider.style.left = slider.offsetLeft - 300 + "px";
    // slider.style.animation = "fadeOutLeft 250ms";
  };
  const rightClick = () => {
    const slider = document.querySelector(".slider");
    slider.style.left = slider.offsetLeft + 300 + "px";
  };
  return (
    <div className="whatTheyDo">
      <Container style={{ position: "relative", display: "flex" }}>
        <div className="left-side">
          <div className="header-title-wrapper ">
            <h1 className="title">What They Do</h1>
            <span className="line"></span>
          </div>
          <p className="text">
            Your Private
            <br /> Office can <br />
            organize:
          </p>
          <button onClick={() => leftClick()}>left</button>
          <button onClick={() => rightClick()}>right</button>
        </div>
        <div className="right-side">
          <Carousel show={3.5} slide={2} transition={0.5}>
            {items.map((item, index) => {
              return (
                <div
                  key={index}
                  id={"item" + index}
                  className="item"
                  style={{
                    backgroundImage: ` 
                linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 33.91%),
                url(${item.image})`,
                  }}
                ></div>
              );
            })}
          </Carousel>
        </div>
      </Container>
    </div>
  );
}


*/
}
