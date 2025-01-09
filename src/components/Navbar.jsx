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
      <div><Link to="/"><img src="/paradise-nursery/logo.jpg" /></Link></div>
      <div>Plants</div>
      <Link to="/cart">
        <div className="cart">{totalItems}</div>
      </Link>
    </nav>
  )
}

export default Navbar
