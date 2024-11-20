import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";

import bgAbout from "../../assets/background/bg-about.svg";

export function MainContent() {
  return (
    <div className="main-content">
      <Services />
      <AboutUs />
      <img src={bgAbout} className="about-us__bg" alt="Background About Us" />
    </div>
  );
}
