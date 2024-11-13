export function MainContent() {
  return (
    <div className="main-content">
      <section id="services" className="flex-center">
        <div className="services__header">
          <h5>Main Services</h5>
          <h2>
            Learn services to focus <br />
            on your beauty
          </h2>
          <p>
            Porta rhoncus orci condimentum vitae lobortis eu dignissim non
            massa. Non parturient amet, feugiat tellus sagittis, scelerisque
            eget nulla turpis.
          </p>
        </div>

        <div className="services__box">
          <div className="services__item">
            <img
              className="services__icon"
              src="./assets/services/service-1.svg"
              alt="Service 1"
            />
            <div className="services__item--content">
              <h4>Beauty consultation</h4>
              <p>
                Non parturient amet, feugiat tellus sagittis, scelerisque eget
                nulla turpis.
              </p>
            </div>
          </div>

          <div className="services__item">
            <img
              className="services__icon"
              src="./assets/services/service-2.svg"
              alt="Service 2"
            />
            <div className="services__item--content">
              <h4>Skin treatments</h4>
              <p>
                Non parturient amet, feugiat tellus sagittis, scelerisque eget
                nulla turpis.
              </p>
            </div>
          </div>

          <div className="services__item">
            <img
              className="services__icon"
              src="./assets/services/service-3.svg"
              alt="Service 3"
            />
            <div className="services__item--content">
              <h4>Beauty product</h4>
              <p>
                Non parturient amet, feugiat tellus sagittis, scelerisque eget
                nulla turpis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us" className="flex-center">
        <div className="about-us__info">
          <div className="about-us__info--box">
            <h5>About Us</h5>
            <h2>We are the best beauty clinic</h2>

            <div className="about-us__content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
                quam suscipit purus donec amet. Egestas volutpat facilisi eu
                libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
                tellus in suspendisse placerat.
              </p>
              <p>
                Id dui erat sed quam tellus in purus. Pellentesque congue
                fringilla cras tellus enim.
              </p>
            </div>
          </div>

          <div className="about-us__btn">
            <button type="button" className="btn">
              Learn More
            </button>
            <a className="flex-center">
              <img src="./assets/play-btn.svg" alt="Watch Video" />
              <span>Watch Video</span>
            </a>
          </div>
        </div>

        <div className="about-us__pic">
          <img src="./assets/about-us.svg" alt="About Us Image" />
        </div>
      </section>

      <img
        src="./assets/background/bg-about.svg"
        className="about-us__bg"
        alt="Background About Us"
      />
    </div>
  );
}
