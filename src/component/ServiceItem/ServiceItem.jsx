import { StyleItem, ServiceContent } from "./ServiceItemStyled";

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
