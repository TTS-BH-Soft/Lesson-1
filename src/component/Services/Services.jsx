import styled from "styled-components";
import Service1 from "../../assets/services/service-1.svg";
import Service2 from "../../assets/services/service-2.svg";
import Service3 from "../../assets/services/service-3.svg";
import ServiceItem from "../ServiceItem/ServiceItem";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("../../assets/background/bg-about.svg") no-repeat;
  background-position: bottom right;
  background-size: contain;
  padding-top: 100px;
  position: relative;
  z-index: 88;
`;

const Header = styled.div`
  max-width: 848px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h5 {
    font-size: 16.2px;
    line-height: 23px;
  }

  h2 {
    margin-top: 10px;
    font-weight: 600;
    width: 732px;
    height: 97px;
  }

  p {
    margin-top: 12.5px;
    margin-left: 1px;
    font-weight: 400;
  }
`;

const ServicesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  padding-top: 80px;
  background-color: #fff;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Services = () => (
  <Section id="services">
    <Header>
      <h5>Main Services</h5>
      <h2>
        Learn services to focus <br />
        on your beauty
      </h2>
      <p>
        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
        Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
        turpis.
      </p>
    </Header>

    <ServicesBox>
      <ServiceItem
        image={Service1}
        alt={"Service 1"}
        title={"Beauty consultation"}
        description={
          "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        }
      />

      <ServiceItem
        image={Service2}
        alt={"Service 2"}
        title={"Skin treatments"}
        description={
          "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        }
      />

      <ServiceItem
        image={Service3}
        alt={"Service 3"}
        title={"Beauty product"}
        description={
          "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        }
      />
    </ServicesBox>
  </Section>
);

export default Services;
