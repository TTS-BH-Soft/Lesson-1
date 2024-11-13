import NavImage from "../../assets/logo/main-logo.png";

export function Navbar() {
  return (
    <div id="navbar">
      <img src={NavImage} alt="Logo" className="navbar__logo" />
      <div className="navbar__nav">
        <div className="navbar__box navbox__link">
          <a href="#" className="navbar__link active">
            Home
          </a>
          <a href="#" className="navbar__link link__children">
            About
          </a>
          <a href="#" className="navbar__link link__children">
            Service
          </a>
          <a href="#" className="navbar__link link__children">
            Gallery
          </a>
          <a href="#" className="navbar__link link__root">
            Blog
          </a>
        </div>
        <div className="navbar__box">
          <button type="button" className="navbar__button btn">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
