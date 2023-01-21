import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../views/home/home";
import Access from "../views/access/access";
import Register from "../views/register";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Access/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
