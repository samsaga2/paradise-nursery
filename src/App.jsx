import Landing from './pages/Landing'
import ProductListing from './pages/ProductListing'
import { Routes, Route } from "react-router-dom";
import Cart from './pages/Cart'

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Landing />} />
        <Route path="products" element={<ProductListing />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
