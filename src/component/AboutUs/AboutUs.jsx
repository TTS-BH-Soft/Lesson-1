import styled from "styled-components";
import PlayBtn from "../../assets/play-btn.svg";
import AboutPic from "../../assets/about-us.svg";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 67px 70px;
`;

const InfoBox = styled.div`
  width: 664px;
`;

const Header = styled.div`
  margin-bottom: 0.5rem;

  h5 {
    margin-bottom: 0.8rem;
    line-height: 20px;
    font-weight: 600;
  }

  h2 {
    margin-bottom: 1.2rem;
    font-weight: 600;
  }
`;

const Content = styled.div`
  max-width: 483px;
  line-height: 24px;

  p {
    line-height: 1.5;
    margin-bottom: 1.5rem;
    letter-spacing: 1.7px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 3.1rem;
  display: flex;
  justify-content: flex-start;

  button {
    max-width: 200px;
    height: 59px;
    letter-spacing: 1.5px;
  }

  a {
    text-decoration: none;
    margin: 0 2.8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  span {
    margin: 0 0.8rem;
    color: #8b8b8b;
    letter-spacing: 1.8px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.6rem;
  max-width: 476px;
`;

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
