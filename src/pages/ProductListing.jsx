import './ProductListing.css'
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity } from "../itemsSlice";
import Navbar from '../components/Navbar'

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

  const handleAddToCart = (key, index) => {
    const item = groupedItems[key][index];
    const item_index = items.indexOf(item);
    dispatch(incrementQuantity(item_index));
  };

  return (
    <>
      <Navbar to="/cart"/>
      <div className="groups">
        {Object.keys(groupedItems).map(key => (
          <div className="group" key={key}>
            <div className="title">{key}</div>
            <div className="products">
              {groupedItems[key].map((item, index) => (
                <div className="product" key={index}>
                  <div className="name">{item.name}</div>
                  <img src={item.img}></img>
                  <div className="description">{item.description}</div>
                  <div className="cost">{item.cost}$</div>
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
