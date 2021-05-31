import "./styles.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        <h1 className="title">POKEDEX CREATOR</h1>
      </Link>
      <div className="favourites">Favourites</div>
    </div>
  );
};
export default Header;
