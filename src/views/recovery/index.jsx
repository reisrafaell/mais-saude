import { useNavigate } from "react-router-dom";
import logoBrand from "../../assets/logoBrand.png";
import person from "../../assets/person.png";
import Text from "../../components/text";
import Button from "../../components/button";
import Image from "../../components/image";
import InputComponent from "../../components/input";
import * as S from "./recovery.styles";
import Anchor from "../../components/anchor";

const RecoveryLogin = () => {
  const nav = useNavigate();

  const onChange = () => { }

  return (
    <S.Container>
      <div>
        <Image img={logoBrand} width={"32.3125rem"} />
        <S.ContainerLogin>
        <Anchor icon={true} href="/access" color={"#E53D00"} margin="0.5rem 0">
          Voltar
        </Anchor>
        <Text
          fontSize={"1rem"}
          color={"#E53D00"}
          fontWeight="700"
        >
          Recuperar Senha
        </Text>
          <InputComponent
            label={"Inserir Email"}
            type={"text"}
            placeholder={"Email"}
            onChange={onChange}
            showError={false} />
          <Button children={"Enviar"} height={"2.5rem"} />
        </S.ContainerLogin>
      </div>
      <Image img={person} width={"32.3125rem"} />
    </S.Container>
  );
};
export default RecoveryLogin;
