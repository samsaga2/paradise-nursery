import './ProductListing.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { incrementQuantity } from "./itemsSlice";

function ProductListing() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const groupedItems = items.reduce((acc, item) => {
    const key = item.group;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  const totalItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const handleAddToCart = (key, index) => {
    const item = groupedItems[key][index];
    const item_index = items.indexOf(item);
    dispatch(incrementQuantity(item_index));
  };

  return (
    <>
      <nav className="navbar">
        <div><Link to="/">Paradise Nursery</Link></div>
        <div>Plants</div>
        <div className="cart">
          <Link to="/cart">{totalItems}</Link>
        </div>
      </nav>
      <div className="groups">
        {Object.keys(groupedItems).map(key => (
          <div className="group" key={key}>
            <div className="title">{key}</div>
            <div className="products">
              {groupedItems[key].map((item, index) => (
                <div className="product" key={index}>
                  <img src={item.img}></img>
                  <div>{item.name}</div>
                  <div>{item.cost} $</div>
                  <button onClick={() => handleAddToCart(key, index)}>Add to Cart</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductListing
