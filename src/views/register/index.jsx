import * as S from "./index.styles";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const nav = useNavigate();

  return (
    <S.Container>
      <p>Register</p>
      <button type="button" onClick={()=>{nav(`/Access`)}} >Proxima</button>
    </S.Container>
  );
};
export default Register;
