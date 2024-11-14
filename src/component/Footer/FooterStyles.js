import styled from "styled-components";

export const FooterContent = styled.div`
  display: flex;
  margin-top: 95px;
  margin-left: 50px;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 5rem 8rem;
  max-width: 514px;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 1rem;
  color: #d7dbff;
  margin: 3rem 8.1rem;
`;

export const FooterSocial = styled.div`
  flex: 1;
  max-width: 305px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 28px;
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

  &:hover {
    background-color: #d85076;
  }
`;
