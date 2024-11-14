import styled from "styled-components";

export const FooterLogoContainer = styled.div`
  flex: 1;
  max-width: 492px;
  margin: 6rem 0 5rem 5rem;
`;

export const LogoContent = styled.div`
  margin-left: 1.9rem;
  margin-top: 1.9rem;
`;

export const Description = styled.p`
  color: #d7dbff;
  line-height: 23px;
  font-size: 16px;
  margin-top: 1rem;
  letter-spacing: 1.7px;
  line-height: 20px;
`;

export const Address = styled.address`
  color: #d7dbff;
  font-size: 14px;
  line-height: 23px;
  margin-top: 1.44rem;
  letter-spacing: 1.6px;
`;

export const AddressBox = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.1rem;

  p {
    max-width: 140px;
    color: #d7dbff;
    font-size: 14px;
    letter-spacing: 1.7px;
  }

  a {
    color: #d7dbff;
    max-width: 190px;
    font-size: 14px;
    margin-left: 2.6rem;
    letter-spacing: 1.6px;
    text-decoration: none;
  }
`;
