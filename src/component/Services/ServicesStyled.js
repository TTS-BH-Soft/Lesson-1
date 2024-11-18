import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../../assets/background/bg-about.svg") no-repeat;
  background-position: bottom right;
  background-size: contain;
  padding-top: 100px;
  position: relative;
  z-index: 88;

  @media (max-width: 768px) {
    background-position: center;
    padding: 60px 20px;
  }
`;

export const Header = styled.div`
  max-width: 848px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h5 {
    font-size: 16.2px;
    line-height: 23px;
  }

  h2 {
    margin-top: 10px;
    font-weight: 600;
    width: 732px;
    height: 97px;
  }

  p {
    margin-top: 12.5px;
    margin-left: 1px;
    font-weight: 400;
  }

  @media (max-width: 1024px) {
    p {
      width: 600px;
    }
  }
`;

export const ServicesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.47rem;
  padding-top: 80px;
  background-color: #fff;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
