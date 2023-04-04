import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Details from "./pages/Details/Details";

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<Details />} />
    </Routes>
  )
}
