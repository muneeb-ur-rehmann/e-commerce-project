import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Checkout from "../Components/Checkout";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;