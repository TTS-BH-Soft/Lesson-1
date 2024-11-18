import { Link, LinkItem } from "./FooterLinkStyled";
import Vector from "../../assets/vector.svg";

export default function FooterLinkItem({ alt, link }) {
  return (
    <LinkItem>
      <img src={Vector} alt={alt} />
      <Link href="#">{link}</Link>
    </LinkItem>
  );
}
