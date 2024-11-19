import FooterLinkItem from "../FooterLinkItem/FooterLinkItem";
import FooterLinkSection from "../FooterLinkSection/FooterLinkSection";

import socialLinksData from "../../data/socialLinkData";
import SocialLink from "../SocialLink/SocialLink";

import ArrowBtn from "../../assets/arrow-up.svg";

import {
  FooterLinks,
  FooterBottom,
  FooterSocial,
  FooterCopyright,
  CopyrightText,
  FooterContent,
  BackToTopButton,
} from "./FooterStyled.js";
import FooterLogoComponent from "../FooterLogo/FooterLogo.jsx";

export function Footer() {
  return (
    <footer id="footer">
      <FooterContent>
        <FooterLogoComponent />
        <FooterLinks>
          <FooterLinkSection title={"Pages"}>
            <FooterLinkItem alt={"Home Vector"} link={"Home"} />
            <FooterLinkItem alt={"About Vector"} link={"About"} />
            <FooterLinkItem alt={"Services Vector"} link={"Services"} />
            <FooterLinkItem alt={"Gallery Vector"} link={"Gallery"} />
            <FooterLinkItem alt={"Team Vector"} link={"Team"} />
          </FooterLinkSection>

          <FooterLinkSection title={"Informations"}>
            <FooterLinkItem alt={"Tearms Vector"} link={"Terms & conditions"} />
            <FooterLinkItem alt={"About Vector"} link={"Privacy policy"} />
            <FooterLinkItem alt={"Privacy Vector"} link={"Blog"} />
            <FooterLinkItem alt={"Contact Vector"} link={"Contact"} />
          </FooterLinkSection>
        </FooterLinks>
      </FooterContent>

      <FooterBottom>
        <FooterSocial>
          {socialLinksData.map((link, index) => (
            <SocialLink
              key={index}
              href={link.href}
              src={link.src}
              alt={link.alt}
            />
          ))}
        </FooterSocial>

        <FooterCopyright>
          <CopyrightText>
            © AltDesain Studio 2021 - All right reserved.
          </CopyrightText>
        </FooterCopyright>
      </FooterBottom>

      <BackToTopButton
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={ArrowBtn} alt="Arrow Button" />
      </BackToTopButton>
    </footer>
  );
}
