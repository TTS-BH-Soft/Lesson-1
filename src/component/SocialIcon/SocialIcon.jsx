import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { TeamSocial } from "../Teams/TeamStyled";

const SocialIcons = () => (
  <TeamSocial>
    <a href="#">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a href="#">
      <FontAwesomeIcon icon={faFacebookF} />
    </a>
    <a href="#">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </TeamSocial>
);

export default SocialIcons;
