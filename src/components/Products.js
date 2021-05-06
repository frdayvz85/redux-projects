import React from 'react'
import formatCurrency from '../utils';

const Products = ({ products, addToCart }) => {
    return (
        <>
            <ul className="products">
                {
                    products.length > 0 ?
                        products.map(product => (
                            <li key={product.id}>
                                <div className="product">
                                    <a href={"#" + product.id}>
                                        <img src={product.image} alt={product.title} />
                                        <p className="product-title">{product.title}</p>
                                    </a>
                                </div>
                                <div className="product-detail">
                                    <p className="price">{formatCurrency(product.price)}</p>
                                    <button onClick={() => addToCart(product)} className="btn btn-add">Add To Cart</button>
                                </div>
                            </li>
                        )) :
                        <li className="free-product">There isn't any Product</li>
                }
            </ul>
        </>
    )
}

export default Products
