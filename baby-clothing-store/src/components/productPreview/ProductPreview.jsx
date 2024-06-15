import React from 'react';
import './ProductPreview.css';

const ProductPreview = ({ product, cart, setCart }) => {
    const quantity = cart[product.id]?.quantity || 0;

    const addToCart = () => {
        const newCart = { ...cart };
        if (newCart[product.id]) {
            newCart[product.id].quantity += 1;
        } else {
            newCart[product.id] = { ...product, quantity: 1 };
        }
        setCart(newCart);
    };

    const removeFromCart = () => {
        const newCart = { ...cart };
        if (newCart[product.id]?.quantity > 1) {
            newCart[product.id].quantity -= 1;
        } else {
            delete newCart[product.id];
        }
        setCart(newCart);
    };

    return (
        <div className="product-preview">
            <img src={product.image} alt={product.name} className="product-preview-image" />
            <div className="product-preview-info">
                <h2 className="product-preview-name">{product.name}</h2>
                <p className="product-preview-price">${product.price}</p>
                <p className="product-preview-description">{product.description}</p>
                <div className="cart-controls">
                    <button onClick={removeFromCart} disabled={quantity === 0}>-</button>
                    <span>{quantity}</span>
                    <button onClick={addToCart}>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPreview;
