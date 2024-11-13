export function Footer() {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <div className="footer__logo--image">
            <img src="./assets/logo/logo-footer.svg" alt="Beautice Logo" />
          </div>

          <div className="footer__logo--content">
            <p className="footer__description">
              <b>Beautice</b> is a Beauty Clinic WordPress Theme.
            </p>
            <address className="footer__address">
              Baker Steet 101, NY, United States.
              <div className="footer__address--box">
                <p>+521 569 8966.</p>
                <a href="mailto:mail@company.com">mail@company.com</a>.
              </div>
            </address>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__link-section">
            <h3 className="footer__link-title">Pages</h3>

            <ul className="footer__link-list">
              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Home Vector" />
                <a href="#" className="footer__link">
                  Home
                </a>
              </li>

              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="About Vector" />
                <a href="#" className="footer__link">
                  About
                </a>
              </li>
              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Services Vector" />
                <a href="#" className="footer__link">
                  Services
                </a>
              </li>

              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Gallery Vector" />
                <a href="#" className="footer__link">
                  Gallery
                </a>
              </li>

              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Team Vector" />
                <a href="#" className="footer__link">
                  Team
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__link-section">
            <h3 className="footer__link-title">Informations</h3>
            <ul className="footer__link-list">
              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Terms Vector" />
                <a href="#" className="footer__link">
                  Terms & conditions
                </a>
              </li>

              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Privacy Vector" />
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>

              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Blog Vector" />
                <a href="#" className="footer__link">
                  Blog
                </a>
              </li>

              <li className="footer__link-item">
                <img src="./assets/vector.svg" alt="Contact Vector" />
                <a href="#" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__social">
          <a href="https://www.facebook.com/" className="footer__social-link">
            <img src="./assets/footer-icon/fb.svg" alt="Facebook Icon" />
          </a>
          <a href="https://x.com/" className="footer__social-link">
            <img src="./assets/footer-icon/x.svg" alt="X Icon" />
          </a>
          <a href="https://www.linkedin.com/" className="footer__social-link">
            <img src="./assets/footer-icon/li.svg" alt="LinkedIn Icon" />
          </a>
          <a href="https://www.youtube.com/" className="footer__social-link">
            <img src="./assets/footer-icon/youtube.svg" alt="Youtube Icon" />
          </a>
          <a href="https://www.instagram.com/" className="footer__social-link">
            <img src="./assets/footer-icon/ig.svg" alt="Instagram Icon" />
          </a>
        </div>

        <div className="footer__copyright">
          <p className="flex-center">
            © AltDesain Studio 2021 - All right reserved.
          </p>
        </div>
      </div>

      <button
        className="footer__back-to-top"
        onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </footer>
  );
}
