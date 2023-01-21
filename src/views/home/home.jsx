import * as S from "./home.styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const nav = useNavigate();

  return (
    <S.Container>
      <p>Home</p>
      <button type="button" onClick={()=>{nav(`/Access`)}} >Proxima</button>
    </S.Container>
  );
};
export default Home;
