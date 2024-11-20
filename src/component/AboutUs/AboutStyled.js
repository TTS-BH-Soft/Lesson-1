import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 67px 70px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 50px 20px;
    text-algin: center;
  }

  @media (max-width: 768px) {
    margin: 30px 10px;
  }
`;

export const InfoBox = styled.div`
  width: 664px;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Header = styled.div`
  margin-bottom: 0.5rem;

  h5 {
    margin-bottom: 0.8rem;
    margin-left: 0.08rem;
    margin-top: 0.1rem;

    line-height: 20px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  h2 {
    margin-bottom: 1.2rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 483px;
  line-height: 24px;

  p {
    line-height: 24px;
    margin-bottom: 1.5rem;
    letter-spacing: 1.695px;

    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 22px;
      width: 350px;
    }
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 3.3rem;
  display: flex;
  justify-content: flex-start;

  button {
    max-width: 200px;
    height: 58.36px;
    letter-spacing: 1.76px;
    margin-left: 1px;
  }

  a {
    text-decoration: none;
    margin-left: 2.7rem;
    margin-right: 2.8rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  span {
    margin: 0 0.8rem;
    color: #8b8b8b;
    letter-spacing: 1.8px;
  }

  @media (max-width: 1024px) {
    margin-top: 1rem;

    span {
      width: 130px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    button {
      font-size: 13px;
      height: 50px;
      margin-right: 16px;
    }

    a {
      margin-left: 0;
      margin-right: 0;
    }

    img {
      width: 35px;
    }

    span {
      width: 120px;
      font-size: 13px;
      margin: 0;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.6rem;
  max-width: 476px;

  @media (max-width: 1024px) {
    max-width: 100%;
    padding-top: 0;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
