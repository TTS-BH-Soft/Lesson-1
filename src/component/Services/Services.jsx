import styled from "styled-components";
import Service1 from "../../assets/services/service-1.svg";
import Service2 from "../../assets/services/service-2.svg";
import Service3 from "../../assets/services/service-3.svg";

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
    font-size: 1rem;
    color: #ff4da6;
  }

  h2 {
    margin-top: 9px;
    font-weight: 600;
    width: 732px;
    height: 97px;
  }

  p {
    margin-top: 13px;
    font-weight: normal;
  }
`;

const ServicesBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  margin-top: 70px;
  background-color: #fff;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 343px;
  min-height: 458px;
  padding: 2.5rem 1.3rem 2.8rem;
  border-radius: 42px;
  box-shadow: 0 25px 50px 25px #f6f7ff;
  z-index: 4;

  img {
    width: 166px;
    height: 166px;
    margin: 2rem 0 3rem;
  }
`;

const ServiceContent = styled.div`
  margin-top: 50px;
  padding: 0 1rem;

  h4 {
    margin: 0.5rem 0;
  }

  p {
    margin: 1.2rem 0;
    font-size: 14px;
    line-height: 21px;
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
      <ServiceItem>
        <img src={Service1} alt="Service 1" />
        <ServiceContent>
          <h4>Beauty consultation</h4>
          <p>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </ServiceContent>
      </ServiceItem>

      <ServiceItem>
        <img src={Service2} alt="Service 2" />
        <ServiceContent>
          <h4>Skin treatments</h4>
          <p>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </ServiceContent>
      </ServiceItem>

      <ServiceItem>
        <img src={Service3} alt="Service 3" />
        <ServiceContent>
          <h4>Beauty product</h4>
          <p>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </p>
        </ServiceContent>
      </ServiceItem>
    </ServicesBox>
  </Section>
);

export default Services;
