import * as S from "./home.styles";
import { useNavigate } from "react-router-dom";
import Anchor from "../../components/anchor";
import Image from "../../components/image";
import imagePerson from "../../assets/person.png";
import imageLogo from "../../assets/logoBrand.png";
import Card from "../../components/card";
import Text from "../../components/text";
import Modal from "../../components/modal";
import { useState } from "react";
import Load from "../../components/load";
import RegisterVaccine from "../../components/registerVaccine";
import axios from "axios";
import Swal from "sweetalert2";
import { useLogin } from "../../contex/authContex";

const Home = () => {
  const nav = useNavigate();
  const [titleModal, setTitleModal] = useState();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState();
  const [lote, setLote] = useState();
  const { handleCpf, handleSessionToken } = useLogin();

  const handleModal = (title) => {
    setTitleModal(title);
    document.getElementById("modal").style.display = "flex";
  };
  const handleData = async () => {
    if (data && lote) {
      setLoad(true);
    } else {
      Swal.fire("Informe todos os dados!!");
    }
  };

  return (
    <S.Container>
      <Load active={load}></Load>
      <Modal title={titleModal}>
        <RegisterVaccine
          onChangeData={(e) => setData(e.target.value)}
          onChangeLote={(e) => setLote(e.target.value)}
          onClick={handleData}
        ></RegisterVaccine>
      </Modal>
      <S.ContainerHeader>
        <Anchor
          icon={true}
          fontSize="1.5rem"
          href="/access"
          color={"#E53D00"}
          margin="0.5rem 0"
        >
          Voltar
        </Anchor>
        <Image img={imageLogo} width="22rem" />
      </S.ContainerHeader>
      <S.ContainerCenter>
        <Text
          fontSize={"1.5rem"}
          color={"#000000"}
          fontWeight="600"
          margin="0 0 0.5rem"
        >
          Selecione a vacina para editar
        </Text>
        <Card variant="card3" onClick={() => handleModal("titulo")} />
      </S.ContainerCenter>
    </S.Container>
  );
};
export default Home;
