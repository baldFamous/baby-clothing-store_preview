import React from 'react';
import './ProductPreview.css';

const ProductPreview = ({ product }) => {
    return (
        <div className="product-preview">
            <img src={product.image} alt={product.name} className="product-preview-image" />
            <div className="product-preview-info">
                <h2 className="product-preview-name">{product.name}</h2>
                <p className="product-preview-price">${product.price}</p>
                <p className="product-preview-description">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductPreview;
