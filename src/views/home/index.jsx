import * as S from "./home.styles";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../components/input";

const Home = () => {
  const nav = useNavigate();

  return (
    <S.Container>
     Home
    </S.Container>
  );
};
export default Home;
