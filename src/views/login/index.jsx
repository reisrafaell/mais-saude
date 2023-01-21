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
        <Image img={logoBrand} width={517} />
        <InputComponent type={"text"} placeholder={"Email"} onChange={onChange} value={""} showError={false} />
        <InputComponent type={"password"} placeholder={"Senha"} onChange={onChange} value={""} showError={false} />
      </div>
      <Image img={person} width={476} />
    </S.Container>
  );
};
export default Login;
