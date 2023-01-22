import React,{useEffect} from "react";
import * as S from "./login.styles";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/input";
import logoBrand from "../../assets/logoBrand.png";
import person from "../../assets/person.png";
import Image from "../../components/image";
import Button from "../../components/button";
import Anchor from "../../components/anchor";
import Load from "../../components/load";
import { useState } from "react";
import { useLogin } from "../../contex/authContex";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const nav = useNavigate();
  const [load, setLoad] = useState(false);
  const { handleSessionToken } = useLogin();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const api = axios.create({ baseURL: "https://mais-saude-api.vercel.app" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);
    const data = {
      email: email,
      password: senha,
    };

    if (senha && email) {
      await api
        .post("person/login", data)
        .then((res) => {
          setLoad(false);
          handleSessionToken(res.data.token);
          nav("/home");
        })
        .catch((err) => {
          setLoad(false);
          Swal.fire(`${err.response.data.message}`);
        });
    } else {
      setLoad(false);
      Swal.fire("Preencha todos os campos!!");
    }
  };


  return (
    <S.Container>
      <Load active={load}></Load>
      <div>
        <Image img={logoBrand} width={"32.3125rem"} />
        <S.ContainerLogin onSubmit={handleSubmit}>
          <InputComponent
            label={"Login"}
            type={"text"}
            placeholder={"Email"}
            onChangeText={(e) => setEmail(e.target.value)}
            showError={false}
          />
          <InputComponent
            type={"password"}
            placeholder={"Senha"}
            onChangeText={(e) => setSenha(e.target.value)}
            showError={false}
            right={"1.1rem"} 
          />
          <div>
            <Anchor
              fontSize={"0.75rem"}
              color={"#E53D00"}
              fontWeight="600"
              margin="0 0 0.5rem"
              href={"/recovery"}
            >
              Esqueceu sua senha?
            </Anchor>
            <Anchor
              fontSize={"0.75rem"}
              color={"#E53D00"}
              fontWeight="600"
              margin="0 0 1rem"
              href={"/register"}
            >
              Não tem conta? Cadastre-se
            </Anchor>
          </div>
          <Button
            children={"Entrar"}
            height={"2.5rem"}
            type="submit"
            />
        </S.ContainerLogin>
      </div>
      <Image img={person} width={"32.3125rem"} />
    </S.Container>
  );
};
export default Login;
