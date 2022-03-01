import Logo from "../../assets/brandlogo/logo";
import Container from "../Container";
import "./header.scss";
export default function Header() {
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
          </nav>
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
