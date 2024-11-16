import React, { useState } from 'react'; 
import './App.css'
import ProductList from 'src\Components\ProductList.jsx';
import AddProductForm from 'src\Components\AddProductForm.jsx';

function App() {
  const products = [products, setProducts] = useState([
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

  return (
    <>
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </>
  )
}

export default App
