import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  href,
  width,
  background,
  margin
}) => {
  const nav = useNavigate();
  return (
      <S.Button
      width={width}
      margin={margin}
      background={background}
        onClick={() => {
          nav(`${href}`);
        }}
      >
        {children}
      </S.Button>
  );
};

export default Button;