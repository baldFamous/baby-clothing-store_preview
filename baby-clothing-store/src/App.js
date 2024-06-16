import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/home/Home';
import Admin from './pages/admin/Admin';
import Login from './pages/admin/Login';
import Cart from './pages/cart/Cart';
import './App.css';
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";

function App() {
    const [cart, setCart] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <NavBar cart={cart} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home cart={cart} setCart={setCart} />} />
                    <Route path="/admin" element={<Admin isAuthenticated={isAuthenticated}/>} />
                    <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
