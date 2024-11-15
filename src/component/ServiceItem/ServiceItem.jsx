import styled from "styled-components";

const StyleItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 343px;
  min-height: 458px;
  padding: 2.6rem 0.9rem;
  border-radius: 42px;
  box-shadow: 0 25px 50px 25px #f6f7ff;
  z-index: 4;

  img {
    width: 166px;
    height: 166px;
    margin: 1.4rem 0 2.9rem;
  }
`;

const ServiceContent = styled.div`
  padding: 0 1rem;

  h4 {
    margin: 0.5rem 0;
    letter-spacing: 0.13px;
  }

  p {
    margin: 1.2rem 0;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: 1.5px;
  }
`;

export default function ServiceItem({ image, alt, title, description }) {
  return (
    <StyleItem>
      <img src={image} alt={alt} />
      <ServiceContent>
        <h4>{title}</h4>
        <p>{description}</p>
      </ServiceContent>
    </StyleItem>
  );
}
