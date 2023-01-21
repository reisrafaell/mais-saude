import * as S from "./access.styles";
import { useNavigate } from 'react-router-dom'


const Access = () => {
  const nav = useNavigate()
  return (
    <S.Container>
      <p>Aceess</p>
      <button type="button" onClick={()=>{nav(`/`)}} >Proxima</button>

    </S.Container>
  );
};
export default Access;
