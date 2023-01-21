import * as S from "./login.styles";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/input";
import logoBrand from "../../assets/logoBrand.png"
import person from "../../assets/person.png"
import Image from "../../components/image";

const Login = () => {
  const nav = useNavigate();

  const onChange = () => { }

  return (
    <S.Container>
      <div>
        <Image img={logoBrand} width={"32.3125rem"} />
        <S.ContainerLogin>
          <InputComponent label={Login} type={"text"} placeholder={"Email"} onChange={onChange} value={""} showError={false} />
          <InputComponent type={"password"} placeholder={"Senha"} onChange={onChange} value={""} showError={false} />
        </S.ContainerLogin>
      </div>
      <Image img={person} width={"32.3125rem"} />
    </S.Container>
  );
};
export default Login;
