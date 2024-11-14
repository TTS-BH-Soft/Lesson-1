import {
  TeamSection,
  SectionTitle,
  MainTitle,
  Description,
  TeamBox,
  TeamItem,
  TeamImage,
  TeamContent,
} from "./Team";
import teamMembers from "../../data/teamMembers";
import SocialIcon from "../SocialIcon/SocialIcon";

export function Team() {
  return (
    <TeamSection id="team">
      <SectionTitle>Professional Teams</SectionTitle>
      <MainTitle>The Professional Expert</MainTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </Description>

      <TeamBox>
        {teamMembers.map((member, index) => (
          <TeamItem key={index} center={member.center}>
            <TeamImage>
              <img src={member.image} alt={member.name} />
            </TeamImage>
            <TeamContent>
              <h5>{member.role}</h5>
              <h4>{member.name}</h4>
              <p>{member.description}</p>
            </TeamContent>
            <SocialIcon />
          </TeamItem>
        ))}
      </TeamBox>
    </TeamSection>
  );
}
