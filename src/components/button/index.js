import * as S from "./styles";
import { useNavigate } from "react-router-dom";

const Button = ({
  children,
  href,
  width,
  heigth,
  background,
  margin,
  type,
  variant,
  onClick
}) => {
  const nav = useNavigate();
  return variant === 'primary' ? (
      <S.Button
      type={type}
      width={width}
      heigth={heigth}
      margin={margin}
      background={background}
        onClick={onClick}
      >
        {children}
      </S.Button>
  ):(
    <S.Button
    type={type}
    width={width}
    margin={margin}
    background={background}
      onClick={() => href && nav(`${href}`)}
    >
      {children}
    </S.Button>
);
};

export default Button;