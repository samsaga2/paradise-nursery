import './Cart.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { incrementQuantity, decrementQuantity, resetQuantity } from "../itemsSlice";
import Navbar from '../components/Navbar'

function Cart() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const groupedItems = items.reduce((acc, item) => {
    if (item.quantity > 0) {
      const key = item.group;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
    }
    return acc;
  }, {});

  const totalCost = items.reduce((total, item) => {
    return total + item.quantity * item.cost;
  }, 0);

  const handleAddToCart = (key, index) => {
    const item = groupedItems[key][index];
    const item_index = items.indexOf(item);
    dispatch(incrementQuantity(item_index));
  };

  const handleRemoveFromCart = (key, index) => {
    const item = groupedItems[key][index];
    const item_index = items.indexOf(item);
    dispatch(decrementQuantity(item_index));
  };

  const handleDeleteFromCart = (key, index) => {
    const item = groupedItems[key][index];
    const item_index = items.indexOf(item);
    dispatch(resetQuantity(item_index));
  };

  const handleCheckout = () => {
    alert("Thanks for shopping!");
  };

  return (
    <>
      <Navbar />
      <div className="cart_groups">
        {Object.keys(groupedItems).map(key => (
          <div className="cart_group" key={key}>
            <div className="title">{key}</div>
            <div className="products">
              {groupedItems[key].map((item, index) => (
                <div className="cart_product" key={index}>
                  <div className="name">{item.name}</div>
                  <img src={item.img}></img>
                  <div className="buy">
                    <div className="cost">{item.cost} $</div>
                    <div>
                      <button onClick={() => handleRemoveFromCart(key, index)}>-</button>
                      {item.quantity}
                      <button onClick={() => handleAddToCart(key, index)}>+</button>
                    </div>
                    <button className="delete" onClick={() => handleDeleteFromCart(key, index)}>Delete</button>
                  </div>
                  <div className="description">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="footer">
          <div className="totalCost">Total {totalCost} $</div>
          <Link to="/products">
            <button>Continue shopping</button>
          </Link>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
