import Home from "./Home";
import { BrowserRouter as Router } from 'react-router-dom'
import CartContext from "./context/cart";
import { useEffect, useState } from "react";
import Checkout from './Components/Checkout'

function App() {
    const [cart, setCart] = useState([])
    useEffect(() => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(cart)
    }, [])
    return (
        <Router>
            <CartContext.Provider value={{ cart, setCart }}>
                <Home />
            </CartContext.Provider>
        </Router>
    )
}
export default App