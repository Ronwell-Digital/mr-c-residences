import { useEffect, useLayoutEffect, useState } from "react";
import Logo from "../../assets/brandlogo/logo";
import Instagram from "../../assets/svgs/Instagram";
import Container from "../Container";
import "./header.scss";
import MrcMan from "../../assets/svgs/biggerMrc.svg";
let timeout;
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

export default function Header() {
  const [width, height] = useWindowSize();

  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        if (window.scrollY > 10) {
          document.querySelector(".header").classList.add("sticky");
        } else {
          document.querySelector(".header").classList.remove("sticky");
        }
      }, 10);
    };
  }, []);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".nav");

    function mobileMenu() {
      hamburger.classList.toggle("active");

      nav.classList.toggle("active");

      if (nav.classList.contains("active")) {
        nav.style.backgroundImage = `url(${MrcMan})`;
      } else {
        nav.style.backgroundImage = "none";
      }
    }

    hamburger.addEventListener("click", mobileMenu);
  }, []);
  return (
    <header className="header">
      <Container>
        <div className="header-inner">
          <div className="brand-logo-wrapper">
            <a href="/" className="brand-logo">
              <Logo />
            </a>
          </div>
          <nav className="nav">
            <div className="brand-logo-wrapper-inner ">
              <Logo />
            </div>
            <ul className="nav-list">
              {headerNav.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="nav-item"
                    onClick={function () {
                      const bodyRect =
                        document.body.getBoundingClientRect().top;
                      const elementRect = document
                        .querySelector(`.${item.to}`)
                        .getBoundingClientRect().top;
                      const elementPosition = elementRect - bodyRect;
                      const offsetPosition =
                        elementPosition -
                        document.querySelector(".header").offsetHeight;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                      });
                    }}
                  >
                    <a className="nav-title">{item.title}</a>
                  </li>
                );
              })}
              <button
                className="btn"
                onClick={function () {
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = document
                    .querySelector(`.contact`)
                    .getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition =
                    elementPosition -
                    document.querySelector(".header").offsetHeight;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }}
              >
                <span>BROCHURE</span>
              </button>
            </ul>

            <Instagram className="instagram" />
          </nav>

          <div className="hamburger">
            <span className="bar bar-1"></span>
            <span className="bar bar-2"></span>
            <span className="bar bar-3"></span>
          </div>
        </div>
      </Container>
    </header>
  );
}
const headerNav = [
  { title: "about", to: "about" },
  { title: "residences", to: "floor-plans" },
  { title: "inspiration", to: "inspiration" },
  { title: "contact", to: "contact" },
];
