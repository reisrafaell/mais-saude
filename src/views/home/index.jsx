import React, { useEffect } from "react";
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
  const [dataModal, setDataModal] = useState();
  const [lote, setLote] = useState();
  const [name, setName] = useState();
  const [idModal, setIdModal] = useState();
  const { handleCpf, sessionToken } = useLogin();

  const api = axios.create({ baseURL: "https://mais-saude-api.vercel.app" });
  const handleModal = (title, key) => {
    setIdModal(key);
    setTitleModal(title);
    document.getElementById("modal").style.display = "flex";
  };

  const handleData = async () => {
    if (dataModal  && idModal) {
      setLoad(true);
      const body = {
        date: dataModal,
        batch: lote,
        idVaccine: idModal,
      };
      const config = {
        headers: {
          authorization: `Bearer ${sessionToken}`,
        },
      };
      await api.patch("/vaccination/check", body, config).then((res) => {
        call();
        Swal.fire("Registrado com Sucesso!!");
        setDataModal("");
        setLote("");
        document.getElementById("modal").style.display = "none";
      });
    } else {
      Swal.fire("Informe todos os dados!!");
    }
  };
  const call = async () => {
    setLoad(true);
    const config = {
      headers: {
        authorization: `Bearer ${sessionToken}`,
      },
    };
    await api.get("/vaccination", config).then((res) => {
      setLoad(false);
      setData(res.data);
    });
  };
  useEffect(() => {
    call();
  }, []);

  return (
    <S.Container>
      <Load active={load}></Load>
      <Modal title={titleModal}>
        <RegisterVaccine
          valueData={dataModal}
          valueLote={lote}
          onChangeData={(e) => setDataModal(e.target.value)}
          onChangeLote={(e) => setLote(e.target.value)}
          onClick={handleData}
        ></RegisterVaccine>
      </Modal>
      <S.ContainerHeader>
        <Anchor
          icon={true}
          fontSize="1.5rem"
          href="/"
          color={"#E53D00"}
          margin="0.5rem 0"
        >
          Sair
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

        {data &&
          data.map((e) => {
            return (
              <Card
                id={e.id}
                vaccine={e.name}
                variant={
                  e.status == "Não informado"
                    ? "card1"
                    : e.status == "Em dia"
                    ? "card2"
                    : "card3"
                }
                onClick={() => handleModal(e.name, e.id)}
              />
            );
          })}
      </S.ContainerCenter>
    </S.Container>
  );
};
export default Home;
