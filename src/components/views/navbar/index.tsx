import "./_navbar.scss";
import { BulbLogo } from "../../../assets/bulb-logo";
const NavBar = () => {
  return (
    <div className="NavBar">
      <BulbLogo width={"90px"} height={"90px"} />
      <p>Home</p>
      <p>Test</p>
    </div>
  );
};

export default NavBar;
