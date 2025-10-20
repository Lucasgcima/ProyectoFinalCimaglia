import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/Logo-en-blancoBariloche-768x200.png" alt="Logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/category/hoteles">Hoteles</Link></li>
        <li><Link to="/category/excursiones">Excursiones</Link></li>
        <li><Link to="/category/autos">Renta de autos</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
