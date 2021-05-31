import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <div className="title">POKEDEX CREATOR</div>
      </Link>
      <Link to="/favourites" className="link">
        <div className="favourites">Favourites</div>
      </Link>
    </div>
  );
};
export default Header;
