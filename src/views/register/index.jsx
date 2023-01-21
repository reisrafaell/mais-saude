import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";
import imageLogo from "../../assets/logoBrand.png"
import imagePerson from "../../assets/person.png"
import Image from "../../components/image";
import Text from "../../components/text";

const Register = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <Image  img={imageLogo} width='25rem'/>
      <S.ContainerCenter>
        <Text fontSize={'1rem'} color={'#E53D00'} fontWeight='700'>Cadastro</Text>
        ola</S.ContainerCenter>
     <S.ContainerImage>
      <Image img={imagePerson}  width='22rem'></Image>
     </S.ContainerImage>
      
      {/* <button type="button" onClick={()=>{nav(`/Access`)}} >Proxima</button> */}
    </S.Container>
  );
};
export default Register;
