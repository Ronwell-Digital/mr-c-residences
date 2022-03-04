import { useEffect } from "react";
import Logo from "../../assets/brandlogo/logo";
import Instagram from "../../assets/svgs/Instagram";
import Container from "../Container";
import "./header.scss";
import MrcMan from "../../assets/svgs/biggerMrc.svg";
let timeout;
export default function Header() {
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
      nav.style.backgroundImage = `url(${MrcMan})`;
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
                  <li key={index} className="nav-item">
                    <a className="nav-title">{item.title}</a>
                  </li>
                );
              })}
            </ul>
            <button className="btn">
              <span>BROCHURE</span>
            </button>
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
  { title: "about" },
  { title: "residences" },
  { title: "inspiration" },
  { title: "contact" },
];
