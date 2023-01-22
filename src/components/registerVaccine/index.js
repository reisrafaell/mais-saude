import { useNavigate } from "react-router-dom";
import Anchor from "../anchor";
import Button from "../button";
import InputComponent from "../input";
import * as S from "./styles";

const RegisterVaccine = () => {
  const nav = useNavigate();

  const onChange = () => { }

  return (
    <S.Container>
      <div>
        <S.ContainerVaccine>
          <div>
            <InputComponent
              label={"Data de Vacinação"}
              type={"text"}
              placeholder={"Data"}
              onChange={onChange}
              showError={false} />
            <InputComponent
              label={"Lote da Vacina"}
              type={"number"}
              placeholder={"Lote"}
              onChange={onChange}
              showError={false} />
            <Button
              children={"Cadastrar"}
              height={"2.5rem"}
              margin={"1rem 0 0 0"}
              />
          </div>
          <Anchor
            fontSize={"1rem"}
            color={"#E53D00"}
            fontWeight="400"
            margin="3rem 0 0 0"
            href={"/register"}
          >
            Para mais informações sobre a vacinas, <strong>clique aqui!</strong>
          </Anchor>
        </S.ContainerVaccine>
      </div>
    </S.Container>
  );
};
export default RegisterVaccine;
