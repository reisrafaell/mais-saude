import { useNavigate } from "react-router-dom";
import Anchor from "../anchor";
import Button from "../button";
import InputComponent from "../input";
import * as S from "./styles";

const RegisterVaccine = ({onChangeData,onChangeLote, onClick}) => {

  return (
    <S.Container>
      <div>
        <S.ContainerVaccine>
          <div>
            <InputComponent
              label={"Data de Vacinação"}
              type={"date"}
              placeholder={"Data"}
              onChangeText={onChangeData}
              showError={false} />
            <InputComponent
              label={"Lote da Vacina"}
              type={"text"}
              placeholder={"Lote"}
              onChangeText={onChangeLote}
              showError={false} />
            <Button
              children={"Cadastrar"}
              height={"2.5rem"}
              margin={"1rem 0 0 0"}
              onClick={onClick}
              variant="primary"
              />
          </div>
          <Anchor
            fontSize={"1rem"}
            color={"#E53D00"}
            fontWeight="400"
            margin="3rem 0 0 0"
            target={'_blanck'}
            variant='primary'
            href={"https://www.youtube.com/watch?v=rv5HImuSutA&t=2s"}
          >
            Para mais informações sobre a vacinas, <strong>clique aqui!</strong>
          </Anchor>
        </S.ContainerVaccine>
      </div>
    </S.Container>
  );
};
export default RegisterVaccine;
