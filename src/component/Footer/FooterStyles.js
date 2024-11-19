import styled from "styled-components";

export const FooterContent = styled.div`
  display: flex;
  margin-top: 96px;
  margin-left: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 0 1rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 5rem 8rem;
  max-width: 514px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
    gap: 1.5rem;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1rem;
  color: #d7dbff;
  margin: 2.9rem 8.05rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    margin: 1rem 0;
  }
`;

export const FooterSocial = styled.div`
  flex: 1;
  max-width: 305px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 28px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1.5rem;
    max-width: none;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const FooterCopyright = styled.div`
  margin-left: 0.2rem;
`;

export const CopyrightText = styled.p`
  color: #d7dbff;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 1.7px;
  text-align: center;
`;

export const BackToTopButton = styled.button`
  width: 36px;
  height: 36px;

  position: absolute;
  bottom: 169px;
  right: 65px;

  background-color: #ff64ae;
  color: #ffffff;

  border: none;
  border-radius: 5px;

  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s;

  img {
    padding-top: 6px;
  }

  &:hover {
    background-color: #d85076;
  }

  @media (max-width: 768px) {
    bottom: 100px;
    right: 20px;
  }

  @media (max-width: 480px) {
    bottom: 80px;
    right: 10px;
  }
`;
