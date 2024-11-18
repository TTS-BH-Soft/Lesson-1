import { LinkSection, FooterLinkTitle, FooterLinkList } from "./FooterSection";

export default function FooterLinkSection({ title, children }) {
  return (
    <LinkSection>
      <FooterLinkTitle>{title}</FooterLinkTitle>

      <FooterLinkList>{children}</FooterLinkList>
    </LinkSection>
  );
}
