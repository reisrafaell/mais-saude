import { Route, BrowserRouter, Routes } from "react-router-dom";
<<<<<<< HEAD
import Home from "../views/home/home";
import Access from "../views/access/access";
import Register from "../views/register";
=======
import Home from "../views/home";
import Access from "../views/access";
import Login from "../views/login";
>>>>>>> b96c2f41536162b5e9291840bff89c3e1681541f

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/access" element={<Access/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Rotas;
