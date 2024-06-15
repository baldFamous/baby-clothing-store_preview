import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = ({ isAuthenticated }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate('/login');
        return null;
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const newProduct = { id: Date.now(), name, price, image, description, size, gender };
        // Aquí puedes enviar los datos a una API o almacenarlos en algún estado
        console.log(newProduct);
        // Resetear el formulario
        setName('');
        setPrice('');
        setImage('');
        setDescription('');
        setSize('');
        setGender('');
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
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="">Size</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Gender</option>
                    <option value="Unisex">Unisex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default Admin;
