import styled from "styled-components";
import FooterLinkItem from "../FooterLinkItem/FooterLinkItem";

const LinkSection = styled.div`
  max-width: 215px;
`;

const FooterLinkTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: white;
  letter-spacing: 2px;
`;

const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0 0.3rem;
  margin-top: 1.8rem;
`;

export default function FooterLinkSection({ title, children }) {
  return (
    <LinkSection>
      <FooterLinkTitle>{title}</FooterLinkTitle>

      <FooterLinkList>{children}</FooterLinkList>
    </LinkSection>
  );
}
