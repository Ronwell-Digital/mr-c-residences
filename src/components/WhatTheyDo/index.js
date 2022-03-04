import "./whatTheyDo.scss";
import {
  ArtInvesment,
  Eventplanning,
  Exclusive,
  Privatemember,
  Privatestaff,
  Restaurant,
  Transportlogistics,
  Travel,
  Wellness,
} from "../../assets/images/WhatTheyDo";
import Container from "../Container";
import { Carousel } from "@trendyol-js/react-carousel";

export default function WhatTheyDo() {
  const leftClick = () => {
    const slider = document.querySelector(".slider");
    slider.style.left = slider.offsetLeft - 300 + "px";
    slider.style.animation = "fadeOutLeft 250ms";
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
          <div className="slider">
            <div className="item"></div>
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
          </div>
        </div>
      </Container>
    </div>
  );
}
const items = [
  {
    image: Travel,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: Transportlogistics,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: Eventplanning,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: Wellness,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: Restaurant,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: Privatestaff,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: ArtInvesment,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: Privatemember,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
  {
    image: Exclusive,
    title: "ddfgdfgdfg",
    description: "descriptiondescription description description ",
  },
];
