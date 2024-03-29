import React from 'react'

const Product = ({product, onAdd}) => {

    return (
        <div>
            <img className='small' src={product.image} alt={product.name}></img>
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={()=> onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
