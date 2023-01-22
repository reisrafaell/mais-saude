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

const Home = () => {
  const nav = useNavigate();
  const [titleModal, setTitleModal] = useState();
  const[load, setLoad]= useState(false);

  const handleModal =(title)=>{
    setTitleModal(title)
    document.getElementById('modal').style.display = 'flex'


  }
  return (
    <S.Container>
      <Load active={load}></Load>
      <Modal title={titleModal}>    
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
        <Card variant='card3'/>
      </S.ContainerCenter>
    </S.Container>
  );
};
export default Home;
