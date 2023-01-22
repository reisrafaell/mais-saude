import * as S from "./login.styles";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/input";
import logoBrand from "../../assets/logoBrand.png"
import person from "../../assets/person.png"
import Image from "../../components/image";
import Button from "../../components/button";
import Text from "../../components/text";

const Login = () => {
  const nav = useNavigate();

  const onChange = () => { }

  return (
    <S.Container>
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
          <Text
            fontSize={"0.75rem"}
            color={"#E53D00"}
            fontWeight="600"
            margin="0 0 0.5rem"
          >
            Esqueceu sua senha?
          </Text>
          <Text
            fontSize={"0.75rem"}
            color={"#E53D00"}
            fontWeight="600"
            margin="0 0 1rem"
          >
            Não tem conta? Cadastre-se
          </Text>
          <Button children={"Entrar"} height={"2.5rem"} />
        </S.ContainerLogin>
      </div>
      <Image img={person} width={"32.3125rem"} />
    </S.Container>
  );
};
export default Login;
