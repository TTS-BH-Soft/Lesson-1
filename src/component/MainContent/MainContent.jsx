// import BubbleBg from "../../../public/bg-about.svg";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";

export function MainContent() {
  return (
    <div className="main-content">
      <Services />
      <AboutUs />
      <img
        src={"../../../public/bg-about.svg"}
        className="about-us__bg"
        alt="Background About Us"
      />
    </div>
  );
}
