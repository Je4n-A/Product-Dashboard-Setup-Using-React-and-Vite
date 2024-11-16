import React from "react";

function ProductItem({ product }) {
    return (
        <li>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </li>
    )
}

export default ProductItem