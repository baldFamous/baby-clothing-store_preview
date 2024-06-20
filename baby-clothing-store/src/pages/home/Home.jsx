import React, { useEffect, useState } from 'react';
import ProductCard from "../../components/productCard/ProductCard";
import ProductPreview from "../../components/productPreview/ProductPreview";
import Filter from "../../components/filter/Filter";
import Modal from 'react-modal';
import { fetchProducts } from "../../api/api";
import './Home.css';

Modal.setAppElement('#root');

const Home = ({ cart, setCart }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts({});
                setProducts(data);
                setFilteredProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        getProducts();
    }, []);

    const handleFilter = ({ size, gender, priceRange }) => {
        let filtered = products;

        if (size) {
            filtered = filtered.filter(product => product.size === size);
        }

        if (gender) {
            filtered = filtered.filter(product => product.gender === gender);
        }

        if (priceRange) {
            const [min, max] = priceRange.split('-').map(Number);
            filtered = filtered.filter(product => product.price >= min && product.price <= max);
        }

        setFilteredProducts(filtered);
    };

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Filter onFilter={handleFilter} />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} onClick={() => openModal(product)}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Product Details"
                className="product-modal"
                overlayClassName="product-modal-overlay"
            >
                {selectedProduct && (
                    <ProductPreview product={selectedProduct} cart={cart} setCart={setCart} />
                )}
                <button onClick={closeModal} className="close-modal">Close</button>
            </Modal>
        </div>
    );
};

export default Home;
