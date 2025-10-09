import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="/Logo-en-blancoBariloche-768x200.png" alt="Logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/categoria/hoteles">Hoteles</Link></li>
        <li><Link to="/categoria/cabañas">Cabañas</Link></li>
        <li><Link to="/categoria/hostels">Hostels</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
