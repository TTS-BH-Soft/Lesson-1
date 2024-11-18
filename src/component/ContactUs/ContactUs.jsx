import ContactUsImage from "../../assets/contact-us.svg";
import {
  ContactSection,
  Wrapper,
  ImageContainer,
  Content,
  Title,
  Heading,
  Description,
  Form,
  FormGroup,
  Input,
  Textarea,
  Button,
} from "./ContactStyled";

export function ContactUs() {
  return (
    <ContactSection id="contact-us">
      <Wrapper>
        <ImageContainer>
          <img src={ContactUsImage} alt="Contact Us" />
        </ImageContainer>

        <Content>
          <Title>Contact Us</Title>
          <Heading>Send your inquiry to our expert team</Heading>
          <Description>
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </Description>

          <Form action="#" method="post">
            <FormGroup>
              <Input type="text" placeholder="First name" required />
              <Input
                type="text"
                placeholder="Last name"
                required
                style={{ paddingLeft: "1.7rem" }}
              />
            </FormGroup>
            <Input type="email" placeholder="Email address" required />
            <Input type="text" placeholder="Subject message" required />
            <Textarea
              placeholder="Your inquiry here"
              rows="4"
              required
            ></Textarea>
            <Button type="submit" className="btn">
              Send Message
            </Button>
          </Form>
        </Content>
      </Wrapper>
    </ContactSection>
  );
}
