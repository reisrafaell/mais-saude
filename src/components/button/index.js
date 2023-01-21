import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  href,
}) => {
  const nav = useNavigate();
  return (
      <S.Button
        onClick={() => {
          nav(`${href}`);
        }}
      >
        {children}
      </S.Button>
  );
};

export default Button;