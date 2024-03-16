import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Main/Main";
import PizzaOrder from "./PizzaOrder/PizzaOrder";
import NavBar from "./NavBar/NavBar";
import Cart from "./Cart/Cart";

export default function AppRoutes() {

    return (
        <HashRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/pizzaorder" element={<PizzaOrder/>} />
            </Routes>
            <Cart></Cart>
        </HashRouter>
    )
}