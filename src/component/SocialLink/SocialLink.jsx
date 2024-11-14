import styled from "styled-components";

const SocialLinkWrapper = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s;
  height: 28px;
  font-size: 28px;

  &:hover {
    color: #f06292;
  }
`;

export default function SocialLink({ href, src, alt }) {
  return (
    <SocialLinkWrapper href={href}>
      <img src={src} alt={alt} />
    </SocialLinkWrapper>
  );
}
