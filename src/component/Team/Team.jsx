import styled from "styled-components";
import Team1 from "../../assets/team/team-1.svg";
import Team2 from "../../assets/team/team-2.svg";
import Team3 from "../../assets/team/team-3.svg";

const TeamSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: -100px;
  text-align: center;
`;

const SectionTitle = styled.h5`
  color: #ff4da6;
  font-size: 1rem;
`;

const MainTitle = styled.h2`
  color: #1a1a3c;
  margin: 0.3em 0;
  letter-spacing: 0.2px;
`;

const Description = styled.p`
  color: #777;
  font-size: 1rem;
  margin: 0.6em 0;
  letter-spacing: 1.7px;
`;

const TeamBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 90px;
`;

const TeamItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${(props) => (props.center ? "424px" : "270px")};
  height: ${(props) => (props.center ? "626px" : "439px")};
  margin: ${(props) => (props.center ? "0" : "6.5rem 30px")};
  box-shadow: ${(props) =>
    props.center ? "0 25px 50px 25px #f6f7ff" : "none"};
  gap: ${(props) => (props.center ? "36px" : "0")};
  border-radius: ${(props) => (props.center ? "42px" : "0")};
`;

const TeamImage = styled.div`
  img {
    width: 146px;
    height: 146px;
  }
`;

const TeamContent = styled.div`
  text-align: center;
  max-width: 270px;
  margin: 0.5rem 0;

  h5 {
    margin-bottom: 0.8rem;
  }

  h4 {
    margin-bottom: 1rem;
  }

  p {
    line-height: 21px;
    font-size: 14px;
    margin: 0.1rem 0 0.4rem 0;
  }
`;

const TeamSocial = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 49px;
    border-radius: 50%;
    padding: 24px;
    margin: 0 15px;
    background-color: #fff;
    color: #192343;
    box-shadow: -2px 6px 16px -1px #e6e9fd;
    font-size: 25px;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export function Team() {
  return (
    <TeamSection id="team">
      <SectionTitle>Professional Teams</SectionTitle>
      <MainTitle>The Professional expert</MainTitle>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
      </Description>

      <TeamBox>
        <TeamItem>
          <TeamImage>
            <img src={Team1} alt="Team 1" />
          </TeamImage>
          <TeamContent>
            <h5>Surgeon</h5>
            <h4>Briyan Nevalli</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
          </TeamContent>
          <TeamSocial>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </TeamSocial>
        </TeamItem>

        <TeamItem center className="team__item--center">
          <TeamImage>
            <img src={Team2} alt="Team 2" />
          </TeamImage>
          <TeamContent>
            <h5>Dermatologist</h5>
            <h4>Bella Sebastian</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
          </TeamContent>
          <TeamSocial>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </TeamSocial>
        </TeamItem>

        <TeamItem>
          <TeamImage>
            <img src={Team3} alt="Team 3" />
          </TeamImage>
          <TeamContent>
            <h5>Stylist expert</h5>
            <h4>Lilly Adams</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit
            </p>
          </TeamContent>
          <TeamSocial>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </TeamSocial>
        </TeamItem>
      </TeamBox>
    </TeamSection>
  );
}
