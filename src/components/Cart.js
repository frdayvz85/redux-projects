import React, { useState } from 'react'
import formatCurrency from '../utils'

const Cart = ({ cartItems, removeFromCart }) => {
    const [showCheckout, setshowCheckout] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        address: ""
    })
    const buyBtn = () => {
        setshowCheckout(!showCheckout)
    }

    const createOrder = (e) => {
        e.preventDefault();
        console.log(state.name + " bought this product.")
        setState({
            name: "",
            email: "",
            address: ""
        })
    }
    const handleInput = (e) => {
        setState({ [e.target.name]: e.target.value })
        console.log(e.target.value)
    }


    return (
        <div className="cart-container">
            {cartItems.length === 0 ?
                <div className="cart cart-header">Cart is empty</div>
                : <div className="cart cart-header">You have {cartItems.length} items in the cart {" "}</div>
            }
            <div className="cart-items">
                <ul className="cart-items-single">
                    {cartItems.map((item) => (
                        <li className="carts" key={item.id}>
                            <div>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="cart-property">
                                <div className="product-name"><a href={"#" + item.title}>{item.title}</a></div>
                                <div className="product-detail-p">
                                    <span className="price">{formatCurrency(item.price)} x {item.count}{" "}</span>
                                    <button className="remove-btn" onClick={() => removeFromCart(item)}><i title="Remove" className="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="total">
                {cartItems.length !== 0 && (
                    <div className="total-money">
                        <span> Total:{" "}
                            {formatCurrency(
                                cartItems.reduce((a, c) => a + c.price * c.count, 0)
                            )}</span>
                        <button onClick={buyBtn} className="buy-btn">Buy</button>
                    </div>
                )}
            </div>
            {showCheckout && (
                <div className="buy-form">
                    <form onSubmit={createOrder}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                                value={state.name}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={state.email}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                required
                                value={state.address}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="payment-btn buy-btn">Payment</button>
                        </div>
                    </form>
                </div>
            )}
        </div>

    )
}

export default Cart
