import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ThankYou } from "./pages/ThankYou";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/confirmation" element={<ThankYou />}></Route>
        </Routes>
    );
}
