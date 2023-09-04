import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>Lawler News</h1>
      <p>
        Bringing you all the latest news on CFC. Coding, Football and Cooking!
      </p>
      <Link to ={'/'}>
      <p className="homeLink">Home</p>
      </Link>
    </div>
  );
};

export default Header
