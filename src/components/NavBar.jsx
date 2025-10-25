import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav className="navbar">
      {}
      <div className="navbar__logo">
        <Link to="/">
          <img
            src={`${import.meta.env.BASE_URL}images/CimagliaTurismo.png`}
            alt="Logo"
            className="logo-img"
          />
        </Link>
      </div>

      {}
      <div className="navbar__links">
        <Link to="/category/hoteles" className="nav-btn">Hoteles</Link>
        <Link to="/category/excursiones" className="nav-btn">Excursiones</Link>
        <Link to="/category/autos" className="nav-btn">Autos</Link>
      </div>

      {}
      <div className="navbar__cart">
        <CartWidget />
      </div>
    </nav>
  );
}
