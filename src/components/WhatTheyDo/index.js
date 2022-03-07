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
import Arrow from "../../assets/svgs/Arrow";
import { useEffect, useLayoutEffect, useState } from "react";
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
export default function WhatTheyDo() {
  const [width, height] = useWindowSize();
  const [carouselItems, setCarouselItems] = useState(2.5);
  useEffect(() => {
    if (width <= 576) {
      setCarouselItems(1.5);
    } else {
      setCarouselItems(2.5);
    }
  }, [width]);
  return (
    <div className="what-they-do">
      <Container
        style={{
          display: "flex",
          position: "relative",
          flexDirection: width <= 768 ? "column" : "row",
        }}
      >
        <div className="what-they-do-header">
          <div className="header-title-wrapper ">
            <h1 className="title">What They Do</h1>
            <span className="line"></span>
          </div>
          <p className="text">
            Your Private
            <br /> Office can <br />
            organize:
          </p>
        </div>

        <Carousel
          show={carouselItems}
          slide={1}
          transition={0.5}
          leftArrow={
            <button className="custom-button left-button">
              <Arrow />
            </button>
          }
          rightArrow={
            <button className="custom-button right-button">
              <Arrow />
            </button>
          }
        >
          {items.map((item, index) => {
            return (
              <div
                key={index}
                id={"item" + index}
                className="mapped-item"
                style={{
                  backgroundImage: ` 
                linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 33.91%),
                url(${item.image})`,
                }}
              >
                <div className="item-content">
                  <h2 className="item-title">{item.title}</h2>
                  <p className="item-text">{item.description}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
}
const items = [
  {
    image: Travel,
    title: "Travel Advisory",
    description: "Booking and local fixer support",
  },
  {
    image: Transportlogistics,
    title: "Transport & Logistics",
    description: "Private & business",
  },
  {
    image: Eventplanning,
    title: "Event Planning",
    description: "Venue, chef/sommelier and entertainment sourcing",
  },
  {
    image: Wellness,
    title: "Wellness",
    description: "Nutritional therapy & personal training experts",
  },
  {
    image: Restaurant,
    title: "Restaurant Recommendations",
    description: "And bookings",
  },
  {
    image: Privatestaff,
    title: "Private Staff",
    description: "Nannies / Chefs / Assistants",
  },
  {
    image: ArtInvesment,
    title: "Art Investment",
    description: "Advisory",
  },
  {
    image: Privatemember,
    title: "Private Member’s Club",
    description: "Application support",
  },
  {
    image: Exclusive,
    title: "Exclusive Access",
    description: "To events, art fairs and fashion weeks",
  },
];
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
