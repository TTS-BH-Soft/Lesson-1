import styled from "styled-components";

export const LinkItem = styled.li`
  margin-bottom: 11px;
  display: flex;
  align-items: center;
`;

export const Link = styled.a`
  color: #d7dbff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  margin-left: 0.8rem;
  letter-spacing: 1.6px;

  &:hover {
    color: #ffffff;
  }
`;
