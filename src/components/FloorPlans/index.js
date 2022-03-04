import { useEffect, useState } from "react";
import Container from "../Container";
import "./floorPlans.scss";
import {
  DuplexResidence,
  DuplexTerrace1,
  DuplexTerrace2,
  PentHouseResidence,
  PentHouseTerrace,
  SimpleHouseResidence,
  SimpleHouseTerrace,
  TownHouseResidence,
  TownHouseTerrace1,
  TownHouseTerrace2,
} from "../../assets/images/FloorPlans";

export default function FloorPlans() {
  const [active, setActive] = useState(0);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const toggleHandler = (index) => {
    try {
      const floorPlanSubmenu = document.querySelectorAll(
        ".floor-plans__content__item__submenu"
      );
      const contentItem = document.querySelectorAll(
        ".floor-plans__content__item"
      );
      contentItem.forEach((el) => {
        el.id.toString() === index.toString()
          ? el.classList.add("active-title")
          : el.classList.remove("active-title");
      });

      floorPlanSubmenu.forEach((item) => {
        item.id.toString() === index.toString()
          ? item.classList.add("active")
          : item.classList.remove("active");
      });
      let magicLine = document.querySelector(".magic-line");
      let activeTitle = document.querySelector(".active-title");
      magicLine.style.width = window
        .getComputedStyle(activeTitle)
        .getPropertyValue("width");

      magicLine.style.left = activeTitle.offsetLeft.toString() + "px";
    } catch (e) {}
  };

  useEffect(() => {
    var sum = 0;
    var childContainer = document.querySelectorAll(
      ".floor-plans__content__item"
    );
    console.log(childContainer);
    childContainer.forEach((el) => {
      sum += el.getBoundingClientRect().width;
    });

    document.querySelector(".floor-plans__content").style.width =
      parseInt(sum.toString().split(".")[0], 10) + 1 + "px";
  }, [deviceWidth]);
  useEffect(() => {
    try {
      const floorPlanSubmenu = document.querySelectorAll(
        ".floor-plans__content__item__submenu"
      );
      floorPlanSubmenu[0].classList.add("active");
      const contentItem = document.querySelectorAll(
        ".floor-plans__content__item"
      );
      contentItem[0].classList.add("active-title");
    } catch (e) {}
  }, []);
  useEffect(() => {
    let magicLine = document.querySelector(".magic-line");
    let activeTitle = document.querySelector(".active-title");
    magicLine.style.width = window
      .getComputedStyle(activeTitle)
      .getPropertyValue("width");
  }, [deviceWidth]);
  return (
    <div className="floor-plans">
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <div className="floor-plans__title">
          <h1>
            Floor Plans <span className="line"></span>
          </h1>
        </div>
        <div className="float-wrapper">
          <div className="floor-plans__content">
            {items.map((item, index) => {
              return (
                <div
                  className="floor-plans__content__item"
                  key={item.index}
                  onClick={() => toggleHandler(index)}
                  id={index}
                >
                  <h2 className="floor-plans__content__item__title ">
                    {item.title}
                  </h2>
                  <p className="floor-plans__content__item__rooms">
                    {item.rooms}
                  </p>
                </div>
              );
            })}
            <div className="magic-line"></div>
          </div>
        </div>

        <div className="floor-plans__content__item__content">
          {items.map((item, index) => {
            return (
              <div
                className="floor-plans__content__item__submenu"
                key={index}
                id={index}
              >
                <div className="floor-plans__content__item__submenu__content">
                  <div className="content-left">
                    <div className="titles">
                      <h1 className="upper-title">Residence</h1>
                      <h2 className="view">
                        View <span className="line"></span>
                      </h2>
                    </div>
                    <div className="content__image">
                      <img src={item.residenceView} alt="" />
                    </div>
                  </div>
                  <div className="content-right">
                    <div className="titles">
                      <h1 className="upper-title">Terrace</h1>
                      <h2 className="view">
                        View <span className="line"></span>
                      </h2>
                    </div>

                    <div className="content__image">
                      {item.terraceView.map((terrace, index) => {
                        return <img src={terrace} alt="" />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
const items = [
  {
    title: "SimpleHouse",
    rooms: "3 bed - 3.5 Bath",
    residenceView: SimpleHouseResidence,
    terraceView: [SimpleHouseTerrace],
  },
  {
    title: "TownHouse",
    rooms: "4 bed - 4.5 Bath",
    residenceView: TownHouseResidence,
    terraceView: [TownHouseTerrace1, TownHouseTerrace2],
  },
  {
    title: "PentHouse",
    rooms: "5 bed - 5.5 Bath",
    residenceView: PentHouseResidence,
    terraceView: [PentHouseTerrace],
  },
  {
    title: "Duplex PentHouse",
    rooms: "6 bed - 6 Full Bath 2 Half Bath",
    residenceView: DuplexResidence,
    terraceView: [DuplexTerrace1, DuplexTerrace2],
  },
];
