import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../views/home";
import Access from "../views/access";
import Login from "../views/login";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Access/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
