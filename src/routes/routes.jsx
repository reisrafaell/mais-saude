import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../views/home";
import Access from "../views/access";
import Register from "../views/register";
import Login from "../views/login";
import RecoveryLogin from "../views/recovery";
import { LoginContexProvider } from "../contex/authContex";

const Rotas = () => {
  return (
    <BrowserRouter>
    <LoginContexProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/recovery" element={<RecoveryLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/access" element={<Access />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </LoginContexProvider>
    </BrowserRouter>
  );
};
export default Rotas;
