import SliderImage from "../../assets/slider.svg";

export function Slider() {
  return (
    <div id="slider">
      <div className="slider__content">
        <div className="slider__text">
          <h1>Clinic & beauty consultant</h1>
          <p>
            It is a long established fact that a reader will be by the readable
            content of a page.
          </p>
          <button className="btn slider__button">More Details</button>
        </div>
        <div className="slider__image">
          <img src={SliderImage} alt="Beauty consultation" />
        </div>
      </div>
      <div className="slider__controls" id="dots-container">
        <div className="dot" id="next"></div>
        <div className="dot active"></div>
        <div className="dot" id="prev"></div>
      </div>
    </div>
  );
}
