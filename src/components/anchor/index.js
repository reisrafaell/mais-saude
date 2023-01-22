import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Anchor = ({
  icon,
  children,
  fontSize,
  margin,
  color,
  as,
  fontWeight,
  href,
  width
}) => {
  const nav = useNavigate();
  return (
    <S.Container margin={margin} width={width}>
      {icon && <S.Icon fontSize={fontSize} color={color} />}
      <S.AnchorComponent
        onClick={() => {
          nav(`${href}`);
        }}
        href={href}
        as={as}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
      >
        {children}
      </S.AnchorComponent>
    </S.Container>
  );
};

export default Anchor;
