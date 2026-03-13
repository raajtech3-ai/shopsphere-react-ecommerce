import { Link } from "react-router-dom";
import logo1 from "../../assets/images/logo1.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="logo-link">
        <img src={logo1} alt="ShopSphere Logo" className="logo-image " />
      </Link>
    </div>
  );
};

export default Logo;
