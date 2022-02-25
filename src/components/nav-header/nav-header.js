import { FaUserAlt } from "react-icons/fa";
import SocialIcons from "../social-icons/social-icons";
import "./nav-header.scss";
const NavHeader = () => {
  return (
    <div className="nav-header">
      <SocialIcons />

      <div className="whole-sale-login">
        <span> Wholesale Login </span>
        <span> | </span>
        <FaUserAlt />
      </div>
    </div>
  );
};

export default NavHeader;
