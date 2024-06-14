import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilter }) => {
    const [size, setSize] = useState('');
    const [gender, setGender] = useState('');
    const [priceRange, setPriceRange] = useState('');

    const handleFilter = () => {
        onFilter({ size, gender, priceRange });
    };

    return (
        <div className="filter">
            <select value={size} onChange={e => setSize(e.target.value)}>
                <option value="">Size</option>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option value="">Gender</option>
                <option value="Unisex">Unisex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <select value={priceRange} onChange={e => setPriceRange(e.target.value)}>
                <option value="">Price</option>
                <option value="0-10">0-10</option>
                <option value="11-20">11-20</option>
                <option value="21-30">21-30</option>
            </select>
            <button onClick={handleFilter}>Apply Filter</button>
        </div>
    );
};

export default Filter;
