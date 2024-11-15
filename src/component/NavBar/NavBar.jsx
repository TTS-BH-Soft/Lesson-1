import NavImage from "../../assets/logo/main-logo.png";
import PlusIcon from "../../assets/plus-icon.svg";
import {
  NavbarContainer,
  Logo,
  Nav,
  NavBox,
  NavBoxLink,
  NavLink,
  RootLink,
  ChildLink,
  Button,
} from "./NavStyled";

export function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={NavImage} alt="Logo" />
      <Nav>
        <NavBoxLink>
          <NavLink href="#" className="active">
            Home
            <img src={PlusIcon} alt="Plus Icon" className="navbar__icon"></img>
          </NavLink>
          <ChildLink href="#">About</ChildLink>
          <ChildLink href="#">Service</ChildLink>
          <ChildLink href="#">Gallery</ChildLink>
          <RootLink href="#">Blog</RootLink>
        </NavBoxLink>

        <NavBox>
          <Button type="button" className="btn">
            Contact
          </Button>
        </NavBox>
      </Nav>
    </NavbarContainer>
  );
}
