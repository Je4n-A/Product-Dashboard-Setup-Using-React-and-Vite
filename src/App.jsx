import React, { useState } from 'react'
import './App.css'
import ProductList from './Components/ProductList/ProductList'
import AddProductForm from './Components/AddProductForm/AddProductForm'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nike Air Max",
      price: 129.99,
      description: "Classic athletic shoes with air cushioning"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: 79.99,
      description: "Bluetooth 5.0 wireless earphones with noise cancellation"
    },
    {
      id: 3,
      name: "Coffee Maker",
      price: 49.99,
      description: "12-cup programmable coffee maker with auto shut-off"
    },
    {
      id: 4,
      name: "Leather Wallet",
      price: 29.99,
      description: "Genuine leather bifold wallet with RFID blocking"
    }
  ])

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId))
  }

  return (
    <div className='app-container'>
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList 
        products={products}
        removeProduct={removeProduct}
      />
    </div>
  )
}

export default App