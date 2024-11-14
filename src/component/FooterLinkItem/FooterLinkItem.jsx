import styled from "styled-components";
import Vector from "../../assets/vector.svg";

const LinkItem = styled.li`
  margin-bottom: 11px;
  display: flex;
  align-items: center;
`;

const Link = styled.a`
  color: #d7dbff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  margin-left: 0.5rem;
  letter-spacing: 1.6px;

  &:hover {
    color: #ffffff;
  }
`;

export default function FooterLinkItem({ alt, link }) {
  return (
    <LinkItem>
      <img src={Vector} alt={alt} />
      <Link href="#">{link}</Link>
    </LinkItem>
  );
}
