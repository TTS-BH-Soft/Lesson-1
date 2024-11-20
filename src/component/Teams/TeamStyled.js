import styled from "styled-components";

export const TeamSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex-direction: column;
  margin-bottom: -160px;

  text-align: center;

  @media (max-width: 480px) {
    max-width: 400px;
  }
`;

export const SectionTitle = styled.h5`
  line-height: 24px;
  letter-spacing: 0.2px;
  margin-top: 4px;
`;

export const MainTitle = styled.h2`
  margin: 0.25em 0;
  letter-spacing: 0.19px;
`;

export const Description = styled.p`
  color: #8b8b8b;
  font-size: 1rem;
  margin: 0.7em 0;
  letter-spacing: 1.6px;
  font-weight: 400;

  @media (max-width: 480px) {
    max-width: 350px;
    margin: 0.7em auto;
    font-size: 0.9rem;
  }
`;

export const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.center ? "center" : "space-between")};
  width: 100%;
  margin: 6.2rem 30px;

  max-width: ${(props) => (props.center ? "424px" : "270px")};
  height: ${(props) => (props.center ? "626px" : "439px")};
  box-shadow: ${(props) =>
    props.center ? "0 25px 50px 25px #f6f7ff" : "none"};
  gap: ${(props) => (props.center ? "40px" : "0")};
  border-radius: ${(props) => (props.center ? "42px" : "0")};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 25px 50px 25px #f6f7ff;
    height: 626px;
    max-width: 424px;
    gap: 40px;
    border-radius: 42px;
    justify-content: center;

    ${(props) =>
      !props.center &&
      `
      max-width: 424px;
      height: 626px;
      gap: 40px;
      border-radius: 42px;
      justify-content: center;
    `}
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 0;
    margin: ${(props) => (props.center ? "0" : "6.2rem 30px")};
  }
`;

export const TeamBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  &:hover ${TeamItem}[data-center="true"] {
    max-width: 270px;
    height: 439px;
    box-shadow: none;
    gap: 0;
    border-radius: 0;
    justify-content: space-between;
    transition: all 0.3s ease;
  }
`;

export const TeamImage = styled.div`
  img {
    width: 146px;
    height: 146px;
  }
`;

export const TeamContent = styled.div`
  text-align: center;
  max-width: 270px;
  margin: 0.5rem 0;

  h5 {
    line-height: 20px;
  }

  h4 {
    margin: 0.9rem 0;
    margin-bottom: 1.3rem;
    font-size: 18px;
    font-weight: 600;
    line-height: 22.5px;
  }

  p {
    margin-left: 0.1rem;
    line-height: 21px;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const TeamSocial = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 49px;
    border-radius: 50%;
    padding: 24px;
    margin: 0 17px;
    background-color: #fff;
    color: #192343;
    box-shadow: -2px 6px 16px -1px #e6e9fd;
    font-size: 25px;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
