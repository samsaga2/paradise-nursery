import './Navbar.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state.items);

  const totalItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <nav className="navbar">
      <div><Link to="/"><img src="/logo.jpg"/></Link></div>
      <div>Plants</div>
      <div className="cart">
        <Link to="/cart">{totalItems}</Link>
      </div>
    </nav>
  )
}

export default Navbar
