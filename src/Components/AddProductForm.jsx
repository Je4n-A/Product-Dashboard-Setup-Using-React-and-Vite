import React, { useState } from 'react'

function AddProductForm({ addProduct }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const newProduct = {
        id: Date.now(), // Generate a unique ID
        name,
        price: parseFloat(price),
        description
      }
      addProduct(newProduct)
      setName('')
      setPrice('')
      setDescription('')
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    )
  }
  
  export default AddProductForm