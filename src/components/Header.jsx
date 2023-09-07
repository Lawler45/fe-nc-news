import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>LAWLER NEWS</h1>
      <p>
        Bringing you all the latest news on CFC. Coding, Football and Cooking!
      </p>
      <NavBar />
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="navBar">
      <Link to={"/"}>
        <p className="homeLink">Home</p>
      </Link>
      <Link to={"/topics/coding"}>
        <p className="codingLink">Coding</p>
      </Link>
      <Link to={"/topics/football"}>
        <p className="footballLink">Football</p>
      </Link>
      <Link to={"/topics/cooking"}>
        <p className="cookingLink">Cooking</p>
      </Link>
    </div>
  );
};
export default Header;
