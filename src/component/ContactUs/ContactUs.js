import styled from "styled-components";
import BgContact from "../../assets/background/bg-contact.svg";

export const ContactSection = styled.section`
  padding: 2rem;
  background: url(${BgContact}) no-repeat;
  background-size: 82%;

  //   padding-top: 0.2rem;
  //   margin-top: 1.9rem;
  margin-bottom: 0.4rem;
`;

export const Wrapper = styled.div`
  padding-top: 106px;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

export const ImageContainer = styled.div`
  margin: 7.3rem;
  margin-right: 6.4rem;

  img {
    width: 520px;
    height: 614px;
    margin-top: 2.8rem;
  }
`;

export const Content = styled.div`
  max-width: 520px;
`;

export const Title = styled.h5`
  margin-bottom: 0.1rem;
`;

export const Heading = styled.h2`
  font-size: 2.2rem;
  margin: 0.7rem 0;
  line-height: 45px;
  max-width: 404px;
  font-weight: 550;
  letter-spacing: 0.4px;
`;

export const Description = styled.p`
  margin: 1.2rem 0;
  letter-spacing: 1.65px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.2rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 61.58px;
  font-size: 1rem;
  font-weight: 300;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  padding-left: 1.4rem;
  margin-bottom: 0.35rem;
  line-height: 24px;

  &:focus {
    border-color: #ff4da6;
  }

  &::placeholder {
    color: #c5c5c5;
    line-height: 24px;
    letter-spacing: 1.7px;
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
`;

export const Button = styled.button`
  margin: 1.4rem 0;
  line-height: 23px;
  letter-spacing: 1.7px;
  padding: 1.1rem 2rem;
  cursor: pointer;
`;
