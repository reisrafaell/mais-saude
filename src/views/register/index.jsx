import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../assets/logoBrand.png"
import imagePerson from "../../assets/person.png"
import Image from "../../components/image";
import Text from "../../components/text";
import Anchor from "../../components/anchor";
import InputComponent from "../../components/input";

const Register = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <Image  img={imageLogo} width='25rem'/>
      <S.ContainerCenter>
        <Anchor icon={true} href='/access' color={'#E53D00'} margin="0.5rem 0">Voltar</Anchor>
        <Text fontSize={'1rem'} color={'#E53D00'} fontWeight='700' margin="0.5rem 0">Cadastro</Text>
        <InputComponent type='text' label='Nome'/>
        <InputComponent type='password' label='Nome'/>
        </S.ContainerCenter>
     <S.ContainerImage>
      <Image img={imagePerson}  width='22rem'></Image>
     </S.ContainerImage>
      
      {/* <button type="button" onClick={()=>{nav(`/Access`)}} >Proxima</button> */}
    </S.Container>
  );
};
export default Register;
