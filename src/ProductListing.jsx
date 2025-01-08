import './ProductListing.css'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductListing() {
  const items = useSelector((state) => state.items);

  const groupedItems = items.reduce((acc, item) => {
    const key = item.group;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  const handleAddToCart = (key, index) => {
    console.log("add", key, index);
    // TODO
  };

  return (
    <>
      <nav className="navbar">
        <div><Link to="/">Paradise Nursery</Link></div>
        <div>Plants</div>
        <div className="cart">0</div>
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
