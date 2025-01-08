import Landing from './Landing'
import ProductListing from './ProductListing'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Landing/>}/>
          <Route path="products" element={<ProductListing/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
