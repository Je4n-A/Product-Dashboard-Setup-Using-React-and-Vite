import React from 'react'; 
import './App.css'

function App() {
  const products = [
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
  ]
  return (
    <>
      <h1>Product Dashboard</h1>
      <AddProductForm/>
      <ProductList products={products}/>
    </>
  )
}

export default App
