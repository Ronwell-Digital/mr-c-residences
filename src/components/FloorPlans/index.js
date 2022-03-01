import { useEffect } from "react";
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
  const toggleHandler = (index) => {
    const floorPlanSubmenu = document.querySelectorAll(
      ".floor-plans__content__item__submenu"
    );
    floorPlanSubmenu.forEach((item) => {
      item.id.toString() === index.toString()
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  };
  useEffect(() => {
    const floorPlanSubmenu = document.querySelectorAll(
      ".floor-plans__content__item__submenu"
    );
    floorPlanSubmenu[0].classList.add("active");
  }, []);
  return (
    <div className="floor-plans">
      <Container>
        <div className="floor-plans__title">
          <h1>Floor Plans </h1>
          <span className="line"></span>
        </div>
        <div className="floor-plans__content">
          {items.map((item, index) => {
            return (
              <div
                className="floor-plans__content__item"
                key={item.index}
                onClick={() => toggleHandler(index)}
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
                      <h2 className="view">View</h2>
                    </div>
                    <div className="content__image">
                      <img src={item.residenceView} alt="" />
                    </div>
                  </div>
                  <div className="content-right">
                    <div className="titles">
                      <h1 className="upper-title">Terrace</h1>
                      <h2 className="view">View</h2>
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
