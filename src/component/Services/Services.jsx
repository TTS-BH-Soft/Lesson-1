import Service1 from "../../assets/services/service-1.svg";
import Service2 from "../../assets/services/service-2.svg";
import Service3 from "../../assets/services/service-3.svg";
import ServiceItem from "../ServiceItem/ServiceItem";

import { Section, Header, ServicesBox } from "./ServicesStyled";

export default function Services() {
  return (
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
}
