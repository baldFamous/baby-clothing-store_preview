import React, {useEffect, useState} from 'react';
import NavBar from "../../components/navBar/NavBar";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";
import ProductPreview from "../../components/productPreview/ProductPreview";
import Filter from "../../components/filter/Filter";
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        // Datos estáticos de ejemplo
        const exampleProducts = [
            {
                id: 1,
                name: 'Baby Onesie',
                price: 19.99,
                image: 'https://via.placeholder.com/150',
                description: 'Comfortable baby onesie made from organic cotton.',
                size: 'Small',
                gender: 'Unisex'
            },
            {
                id: 2,
                name: 'Toddler T-shirt',
                price: 15.99,
                image: 'https://via.placeholder.com/150',
                description: 'Soft and stylish t-shirt for toddlers.',
                size: 'Medium',
                gender: 'Male'
            },
            {
                id: 3,
                name: 'Baby Bib',
                price: 8.99,
                image: 'https://via.placeholder.com/150',
                description: 'Absorbent baby bib made from organic materials.',
                size: 'One Size',
                gender: 'Unisex'
            },
            {
                id: 4,
                name: 'Infant Hat',
                price: 12.99,
                image: 'https://via.placeholder.com/150',
                description: 'Cozy hat to keep infants warm.',
                size: 'Small',
                gender: 'Female'
            },
            {
                id: 5,
                name: 'Kids Pajamas',
                price: 25.99,
                image: 'https://via.placeholder.com/150',
                description: 'Comfortable pajamas set for kids.',
                size: 'Large',
                gender: 'Male'
            },
            {
                id: 6,
                name: 'Baby Socks',
                price: 5.99,
                image: 'https://via.placeholder.com/150',
                description: 'Soft and warm baby socks.',
                size: 'Small',
                gender: 'Unisex'
            },
            {
                id: 7,
                name: 'Toddler Dress',
                price: 22.99,
                image: 'https://via.placeholder.com/150',
                description: 'Beautiful dress for toddlers.',
                size: 'Medium',
                gender: 'Female'
            },
            {
                id: 8,
                name: 'Kids Jacket',
                price: 35.99,
                image: 'https://via.placeholder.com/150',
                description: 'Warm jacket for kids.',
                size: 'Large',
                gender: 'Male'
            },
            {
                id: 9,
                name: 'Infant Booties',
                price: 10.99,
                image: 'https://via.placeholder.com/150',
                description: 'Cute booties for infants.',
                size: 'Small',
                gender: 'Unisex'
            },
            {
                id: 10,
                name: 'Baby Blanket',
                price: 29.99,
                image: 'https://via.placeholder.com/150',
                description: 'Soft baby blanket made from organic cotton.',
                size: 'One Size',
                gender: 'Unisex'
            },
            {
                id: 11,
                name: 'Toddler Jeans',
                price: 18.99,
                image: 'https://via.placeholder.com/150',
                description: 'Durable jeans for toddlers.',
                size: 'Medium',
                gender: 'Male'
            },
            {
                id: 12,
                name: 'Kids Sweater',
                price: 27.99,
                image: 'https://via.placeholder.com/150',
                description: 'Cozy sweater for kids.',
                size: 'Large',
                gender: 'Female'
            },
            {
                id: 13,
                name: 'Infant Mittens',
                price: 6.99,
                image: 'https://via.placeholder.com/150',
                description: 'Warm mittens for infants.',
                size: 'Small',
                gender: 'Unisex'
            },
            {
                id: 14,
                name: 'Kids Shorts',
                price: 14.99,
                image: 'https://via.placeholder.com/150',
                description: 'Comfortable shorts for kids.',
                size: 'Medium',
                gender: 'Male'
            },
            {
                id: 15,
                name: 'Toddler Skirt',
                price: 20.99,
                image: 'https://via.placeholder.com/150',
                description: 'Stylish skirt for toddlers.',
                size: 'Medium',
                gender: 'Female'
            },
            {
                id: 16,
                name: 'Baby Romper',
                price: 23.99,
                image: 'https://via.placeholder.com/150',
                description: 'Adorable romper for babies.',
                size: 'Small',
                gender: 'Unisex'
            },
            {
                id: 17,
                name: 'Kids Hoodie',
                price: 30.99,
                image: 'https://via.placeholder.com/150',
                description: 'Warm hoodie for kids.',
                size: 'Large',
                gender: 'Male'
            }

        ];

        setProducts(exampleProducts);
        setFilteredProducts(exampleProducts);
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

    return (
        <div>
            <NavBar/>
            <Filter onFilter={handleFilter}/>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} onClick={() => setSelectedProduct(product)}>
                        <ProductCard product={product}/>
                    </div>
                ))}
            </div>
            {selectedProduct && <ProductPreview product={selectedProduct}/>}
            <Footer/>
        </div>
    );
};

export default Home;
