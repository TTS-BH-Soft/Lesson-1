import FooterLogo from "../../assets/logo/logo-footer.svg";

import {
  FooterLogoContainer,
  LogoContent,
  Description,
  Address,
  AddressBox,
} from "./FooterLogo.js";

export default function FooterLogoComponent() {
  return (
    <FooterLogoContainer>
      <div>
        <img src={FooterLogo} alt="Beautice Logo" />
      </div>

      <LogoContent>
        <Description>
          <b>Beautice</b> is a Beauty Clinic WordPress Theme.
        </Description>
        <Address>
          Baker Steet 101, NY, United States.
          <AddressBox>
            <p>+521 569 8966.</p>
            <a href="mailto:mail@company.com">mail@company.com</a>.
          </AddressBox>
        </Address>
      </LogoContent>
    </FooterLogoContainer>
  );
}
