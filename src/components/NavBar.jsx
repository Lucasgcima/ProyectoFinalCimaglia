import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src="/Logo-en-blancoBariloche-768x200.png" alt="Logo" />
        </Link>
      </div>
      <ul className="navbar__links">
        <li><Link to="/category/hotel">Hoteles</Link></li>
        <li><Link to="/category/excursion">Excursiones</Link></li>
        <li><Link to="/category/renta">Renta de autos</Link></li>
      </ul>
      <div className="navbar__cart">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
