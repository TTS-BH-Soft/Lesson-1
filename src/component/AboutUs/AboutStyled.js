import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 67px 70px;
`;

export const InfoBox = styled.div`
  width: 664px;
`;

export const Header = styled.div`
  margin-bottom: 0.5rem;

  h5 {
    margin-bottom: 0.8rem;
    margin-left: 0.08rem;
    margin-top: 0.1rem;

    line-height: 20px;
    font-weight: 600;
  }

  h2 {
    margin-bottom: 1.2rem;
    font-weight: 600;
  }
`;

export const Content = styled.div`
  max-width: 483px;
  line-height: 24px;

  p {
    line-height: 24px;
    margin-bottom: 1.5rem;
    letter-spacing: 1.695px;
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
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 2.6rem;
  max-width: 476px;
`;
