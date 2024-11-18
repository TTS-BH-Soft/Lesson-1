import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Logo = styled.img`
  margin-left: 0.7rem;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  margin-right: 10px;
`;

export const NavBoxLink = styled.div`
  width: 481px;
  padding-right: 34px;
  display: flex;
  justify-content: flex-end;
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
