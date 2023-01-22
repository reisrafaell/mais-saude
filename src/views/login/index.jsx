import * as S from "./login.styles";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/input";
import logoBrand from "../../assets/logoBrand.png"
import person from "../../assets/person.png"
import Image from "../../components/image";
import Button from "../../components/button";
import Text from "../../components/text";
import Anchor from "../../components/anchor";
import Load from "../../components/load";
import { useState } from "react";

const Login = () => {
  const nav = useNavigate();
  const[load, setLoad]= useState(false);

  const onChange = () => { }

  return (
    <S.Container>
       <Load active={load}></Load>
      <div>
        <Image img={logoBrand} width={"32.3125rem"} />
        <S.ContainerLogin>
          <InputComponent
            label={"Login"}
            type={"text"}
            placeholder={"Email"}
            onChange={onChange}
            showError={false} />
          <InputComponent
            type={"password"}
            placeholder={"Senha"}
            onChange={onChange}
            showError={false} />
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
          <Button children={"Entrar"} height={"2.5rem"} />
        </S.ContainerLogin>
      </div>
      <Image img={person} width={"32.3125rem"} />
    </S.Container>
  );
};
export default Login;
