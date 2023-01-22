import React, { useState } from "react";
import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../assets/logoBrand.png";
import imagePerson from "../../assets/person.png";
import Image from "../../components/image";
import Text from "../../components/text";
import Anchor from "../../components/anchor";
import InputComponent from "../../components/input";
import Button from "../../components/button";

const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState();
  const [telefone, setTelefone] = useState();
  const [cpf, setCpf] = useState();
  const [dtaNascimento, setDtaNascimento] = useState();
  const [data, setData] = useState();
  const [cep, setCep] = useState();
  const [senha, setSenha] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    if (
      name &&
      telefone &&
      cep &&
      cpf &&
      dtaNascimento &&
      data &&
      senha &&
      email
    ) {
      alert("ok");
    } else {
      alert("Preencha todos os campos!!");
    }
  };

  return (
    <S.Container>
      <Image img={imageLogo} width="25rem" />
      <S.ContainerCenter onSubmit={handleSubmit}>
        <Anchor icon={true} href="/access" color={"#E53D00"} margin="0.5rem 0">
          Voltar
        </Anchor>
        <Text
          fontSize={"1rem"}
          color={"#E53D00"}
          fontWeight="700"
          margin="1rem 0 1rem"
        >
          Cadastro
        </Text>
        <InputComponent
          type="text"
          label="Nome"
          onChangeText={(e) => setName(e.target.value)}
        />
        <InputComponent
          type="number"
          label="Telefone"
          onChangeText={(e) => setTelefone(e.target.value)}
        />
        <InputComponent
          type="number"
          label="Cpf"
          onChangeText={(e) => setCpf(e.target.value)}
        />
        <InputComponent
          type="date"
          label="Data de Nascimento"
          onChangeText={(e) => setDtaNascimento(e.target.value)}
        />
        <InputComponent
          type="number"
          label="Cep"
          onChangeText={(e) => setCep(e.target.value)}
        />
        <InputComponent
          type="number"
          label="Email"
          onChangeText={(e) => setEmail(e.target.value)}
        />
        <InputComponent
          type="password"
          label="Senha"
          onChangeText={(e) => setSenha(e.target.value)}
        />
        <Button
          background="transparent"
          width="100%"
          margin="1rem 0"
          onClick={handleSubmit}
          variant="primary"
        >
          Cadastrar
        </Button>
      </S.ContainerCenter>
      <S.ContainerImage>
        <Image img={imagePerson} width="22rem"></Image>
      </S.ContainerImage>
    </S.Container>
  );
};
export default Register;
