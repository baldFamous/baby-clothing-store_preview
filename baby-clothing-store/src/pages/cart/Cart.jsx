import React from 'react';
import './Cart.css';

const Cart = ({ cart, setCart }) => {
    const handleIncrement = (productId) => {
        const newCart = { ...cart };
        newCart[productId].quantity += 1;
        setCart(newCart);
    };

    const handleDecrement = (productId) => {
        const newCart = { ...cart };
        if (newCart[productId].quantity > 1) {
            newCart[productId].quantity -= 1;
        } else {
            delete newCart[productId];
        }
        setCart(newCart);
    };

    const totalPrice = Object.values(cart).reduce((acc, product) => acc + product.price * product.quantity, 0);

    return (
        <div>
            <div className="cart">
                <h1>Cart</h1>
                {Object.keys(cart).length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {Object.values(cart).map(product => (
                            <div key={product.id} className="cart-item">
                                <img src={product.image} alt={product.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h2>{product.name}</h2>
                                    <p>${product.price}</p>
                                    <div className="cart-controls">
                                        <button onClick={() => handleDecrement(product.id)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button onClick={() => handleIncrement(product.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="cart-total">
                            <h2>Total: ${totalPrice.toFixed(2)}</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
