import { Link } from "react-router-dom";
import "./Category.css";

export default function Category() {
  return (
    <nav className="category-nav">
      <Link to="/category/hoteles" className="category-btn">Hoteles</Link>
      <Link to="/category/excursiones" className="category-btn">Excursiones</Link>
      <Link to="/category/autos" className="category-btn">Autos</Link>
    </nav>
  );
}
