import styled from "styled-components";
import bgContact from "../../assets/background/bg-contact.jpg";

export const ContactSection = styled.section`
  padding: 2rem;
  background: url(${bgContact}) no-repeat;
  background-size: 82%;

  margin-bottom: 0.4rem;

  @media (max-width: 768px) {
    background-size: cover;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

export const Wrapper = styled.div`
  padding-top: 175px;
  display: flex;
  align-items: flex-start;
  max-width: 1440px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }

  @media (max-width: 480px) {
    padding-top: 80px;
  }
`;

export const ImageContainer = styled.div`
  margin: 7.2rem 6.3rem 7.3rem 7.4rem;

  img {
    max-width: 520px;
    height: 614px;
    margin-top: 2.8rem;
  }

  @media (max-width: 1024px) {
    margin: 0;
  }

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
    img {
      width: 70%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 100%;
      margin-top: 1.5rem;
    }
  }
`;

export const Content = styled.div`
  max-width: 520px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

export const Title = styled.h5`
  margin-bottom: 0.1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const Heading = styled.h2`
  font-size: 2.2rem;
  margin: 0.6rem 0;
  line-height: 45px;
  max-width: 404px;
  font-weight: 550;
  letter-spacing: 0.4px;

  @media (max-width: 1024px) {
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    line-height: 38px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    line-height: 32px;
  }
`;

export const Description = styled.p`
  margin: 1.2rem 0;
  letter-spacing: 1.65px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 2rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Input = styled.input`
  height: 61.58px;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid #d9ddfe;

  border-radius: 15px;
  padding-left: 1.4rem;
  padding-bottom: 2px;
  margin-bottom: 0.37rem;
  line-height: 24px;
  width: 520px;

  &:focus {
    border-color: #ff4da6;
  }

  &::placeholder {
    color: #c5c5c5;
    line-height: 24px;
    letter-spacing: 1.7px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  padding-left: 1.4rem;
  padding-top: 1.6rem;
  height: 240px;
  resize: none;
  line-height: 24px;

  &:focus {
    border-color: #ff4da6;
  }

  &::placeholder {
    color: #c5c5c5;
    line-height: 24px;
    letter-spacing: 1.7px;
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const Button = styled.button`
  margin: 1.4rem 0;
  line-height: 23px;
  letter-spacing: 1.7px;
  padding: 1.1rem 2rem;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 100%;
    margin: 0 auto;
  }
`;
