import styled from "styled-components";

export const SliderContainer = styled.div`
  position: relative;
  top: 213px;
  left: 189px;
  height: 542px;
  max-width: 1098px;

  @media (max-width: 1024px) {
    height: auto;
    padding: 0 16px;
    top: 100px;
    left: 0;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const SliderContent = styled.div`
  display: flex;
  justify-content: center;
  transition: transform 0.5s ease;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SliderText = styled.div`
  flex: 1;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  width: 430px;
  height: 128px;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    line-height: 1.2;

    margin: 0 auto;
    height: 60px;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Paragraph = styled.p`
  color: #091156;
  width: 474px;
  height: 54px;
  margin: 0;
  font-weight: 500;
  line-height: 24px;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    width: 100%;
    padding: 0 3rem;
  }
`;

export const Button = styled.button`
  width: 200px;
  margin-top: 27px;
  margin-left: 1px;

  line-height: 23px;
  letter-spacing: 1.65px;
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    margin-top: 16px;
  }
`;

export const ImageContainer = styled.div`
  width: 602px;
  height: 398px;
  position: relative;
  top: -56px;

  img {
    max-width: 602px;
  }

  @media (max-width: 1024px) {
    top: 0;
  }

  @media (max-width: 768px) {
    height: auto;
    top: 0;
    display: flex;
    justify-content: center;

    img {
      height: 300px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 480px;
    }
  }
`;

export const SliderControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 89.3%;
  left: 553px;
  transform: translate(-80%, -50%);
  width: 71px;

  @media (max-width: 1024px) {
    bottom: 10px;
    width: 50px;
    position: static;
    margin: 2rem auto;
    transform: none;
  }
`;

export const Dot = styled.div`
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

  @media (max-width: 1024px) {
    width: 10px;
    height: 2px;

    &.active {
      width: 15px;
      height: 4px;
    }
`;
