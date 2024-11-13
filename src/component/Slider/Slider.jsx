import styled from "styled-components";
import SliderImage from "../../assets/slider.svg";

const SliderContainer = styled.div`
  position: relative;
  top: 213px;
  left: 189px;
  height: 542px;
  width: 1098px;
`;

const SliderContent = styled.div`
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease;
`;

const SliderText = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  width: 430px;
  height: 128px;
`;

const Paragraph = styled.p`
  color: #091156;
  width: 474px;
  height: 54px;
  margin: 0;
  font-weight: 500;
  line-height: 24px;
`;

const Button = styled.button`
  width: 200px;
  margin-top: 27px;
  line-height: 23px;
  letter-spacing: 1.65px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 602px;
  height: 398px;
  position: relative;
  top: -56px;
`;

const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 89.3%;
  left: 553px;
  transform: translate(-80%, -50%);
  width: 71px;
`;

const Dot = styled.div`
  width: 15px;
  height: 3px;
  background-color: #eeeeee;
  border-radius: 50px;
  transition: background-color 0.3s;
  cursor: pointer;

  &.active {
    background-color: #414880;
    width: 25px;
    height: 8px;
    border-radius: 50px;
  }
`;

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
