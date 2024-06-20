import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../api/api';
import './Admin.css';

const Admin = ({ isAuthenticated }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const [stock, setStock] = useState(10); // Ajuste de stock inicial
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('size', size);
        formData.append('gender', gender);
        formData.append('image', image);
        formData.append('stock', stock);

        try {
            await createProduct(formData);
            // Resetear el formulario
            setName('');
            setPrice('');
            setImage(null);
            setDescription('');
            setSize('');
            setGender('');
            setStock(10);
            alert('Product created successfully');
        } catch (error) {
            console.error('Error creating product:', error);
            alert('Failed to create product');
        }
    };

    return (
        <div className="admin">
            <h1>Admin Dashboard</h1>
            <form onSubmit={handleAddProduct}>
                <input
                    type="text"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
                <select value={size} onChange={(e) => setSize(e.target.value)} required>
                    <option value="">Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Gender</option>
                    <option value="Unisex">Unisex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input
                    type="number"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Admin;
