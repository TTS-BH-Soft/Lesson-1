import SliderImage from "../../assets/slider.svg";
import {
  SliderContainer,
  SliderContent,
  SliderText,
  Title,
  Paragraph,
  Button,
  ImageContainer,
  SliderControls,
  Dot,
} from "./SliderStyled";

export function Slider() {
  return (
    <SliderContainer>
      <SliderContent>
        <SliderText>
          <Title>Clinic & beauty consultant</Title>
          <Paragraph>
            It is a long established fact that a reader will be by the readable
            content of a page.
          </Paragraph>
          <Button className="btn">More Details</Button>
        </SliderText>
        <ImageContainer>
          <img src={SliderImage} alt="Beauty consultation" />
        </ImageContainer>
      </SliderContent>
      <SliderControls id="dots-container">
        <Dot id="next"></Dot>
        <Dot className="active"></Dot>
        <Dot id="prev"></Dot>
      </SliderControls>
    </SliderContainer>
  );
}
