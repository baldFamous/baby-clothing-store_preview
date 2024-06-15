import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import Cart from './pages/cart/Cart';
import './App.css';
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";

function App() {
    const [cart, setCart] = useState({});

    return (
        <Router>
            <div className="App">
                <NavBar cart={cart} />
                <Routes>
                    <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
