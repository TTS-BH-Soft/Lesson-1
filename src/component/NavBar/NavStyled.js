import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media (max-width: 1024px) {
    justify-content: space-around;
    align-items: center;
  }
`;

export const Logo = styled.img`
  margin-left: 0.7rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 50px 20px;
    text-algin: center;
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    display: none;

    &.active {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      position: absolute;
      top: 60px;
      right: 0;
      background: #fff;
      width: 100%;
      padding: 1rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
  }
`;

export const NavBoxLink = styled.div`
  width: 481px;
  padding-right: 34px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    // justify-content: space-betwee;
  }
`;

export const NavBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const NavLink = styled.a`
  color: #8b8b8b;
  font-size: 1rem;
  transition: color 0.3s;
  text-decoration: none;
  letter-spacing: 1.7px;
  display: flex;
  align-items: center;

  &.active {
    font-weight: 600;
    color: #41487f;
    width: 66px;
    margin-top: 2px;
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

  &:hover {
    color: #41487f;
  }
`;

export const RootLink = styled(NavLink)`
  margin-right: 1.1rem;
  padding-left: 47px;
`;

export const ChildLink = styled(NavLink)`
  padding-left: 44px;
  max-width: 114px;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  width: 158px;
  height: 52px;
  letter-spacing: 1.7px;
  line-height: 2.5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e07eb3;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;

  div {
    width: 25px;
    height: 3px;
    background-color: #41487f;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(45deg) translateY(8px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ isMenuOpen }) =>
        isMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none"};
    }
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .menu-content {
    position: relative;
    background: transparent;
    z-index: 10;
  }

  a {
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #41487f;
    font-size: 1.2rem;
    margin: 1rem 0;

    &:hover {
      font-weight: bold;
    }
  }

  button {
    margin-top: 1.5rem;
  }

  .close-btn {
    position: absolute;
    top: 20rem;
    right: 15rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: #41487f;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
