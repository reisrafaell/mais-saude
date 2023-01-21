import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../assets/logoBrand.png"
import imagePerson from "../../assets/person.png"
import Image from "../../components/image";
import Text from "../../components/text";
import Anchor from "../../components/anchor";
import InputComponent from "../../components/input";
import Button from "../../components/button";

const Register = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <Image  img={imageLogo} width='25rem'/>
      <S.ContainerCenter>
        <Anchor icon={true} href='/access' color={'#E53D00'} margin="0.5rem 0">Voltar</Anchor>
        <Text fontSize={'1rem'} color={'#E53D00'} fontWeight='700' margin="1rem 0 1rem">Cadastro</Text>
        <InputComponent type='text' label='Nome'/>
        <InputComponent type='number' label='Telefone'/>
        <InputComponent type='number' label='Cpf'/>
        <InputComponent type='date' label='Data de Nascimento'/>
        <InputComponent type='number' label='Cep'/>
        <InputComponent type='number' label='Email'/>
        <Button background='transparent' width='100%'>Cadastrar</Button>
        </S.ContainerCenter>
     <S.ContainerImage>
      <Image img={imagePerson}  width='22rem'></Image>
     </S.ContainerImage>
    </S.Container>
  );
};
export default Register;
