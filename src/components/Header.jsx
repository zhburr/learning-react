import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>Amout Us</li>
          <li>Contact US</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

