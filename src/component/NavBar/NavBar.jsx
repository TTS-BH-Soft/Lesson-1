import { useState } from "react";
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
  HamburgerMenu,
  MobileMenu,
} from "./NavStyled";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <Logo src={NavImage} alt="Logo" />
      <HamburgerMenu onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </HamburgerMenu>

      <Nav className={isMenuOpen ? "active" : ""}>
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
      {isMenuOpen && (
        <MobileMenu>
          <NavLink href="#">Home</NavLink>
          <ChildLink href="#">About</ChildLink>
          <ChildLink href="#">Service</ChildLink>
          <ChildLink href="#">Gallery</ChildLink>
          <RootLink href="#">Blog</RootLink>
          <Button>Contact</Button>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
}
