import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Checkout from './Components/Checkout';
import CartContext from "./context/cart";

function App() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cart);
    }, []);

    return (
        <BrowserRouter>
            <CartContext.Provider value={{ cart, setCart }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </CartContext.Provider>
        </BrowserRouter>
    );
}

export default App;
