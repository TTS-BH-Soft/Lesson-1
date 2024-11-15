import PlayBtn from "../../assets/play-btn.svg";
import AboutPic from "../../assets/about-us.svg";
import {
  Section,
  InfoBox,
  Header,
  Content,
  ButtonContainer,
  ImageContainer,
} from "./AboutStyled";

const AboutUs = () => (
  <Section id="about-us">
    <InfoBox>
      <Header>
        <h5>About Us</h5>
        <h2>We are the best beauty clinic</h2>
      </Header>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat.
        </p>
        <p>
          Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
          cras tellus enim.
        </p>
      </Content>
      <ButtonContainer>
        <button type="button" className="btn">
          Learn More
        </button>
        <a href="#">
          <img src={PlayBtn} alt="Watch Video" />
          <span>Watch Video</span>
        </a>
      </ButtonContainer>
    </InfoBox>

    <ImageContainer>
      <img src={AboutPic} alt="About Us" />
    </ImageContainer>
  </Section>
);

export default AboutUs;
