import { useState } from 'react'
import './ProductListing.css'

function ProductListing() {
  return (
    <>
      <navbar>
        <div>Paradise Nursery</div>
        <div>Plants</div>
        <div className="cart">0</div>
      </navbar>
    </>
  )
}

export default ProductListing
