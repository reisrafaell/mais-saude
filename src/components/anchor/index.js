import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Anchor = ({
  icon,
  variant,
  children,
  fontSize,
  margin,
  color,
  as,
  fontWeight,
  href,
  width,
  target
}) => {
  const nav = useNavigate();
  return variant === 'primary' ? (
    <S.Container margin={margin} width={width}>
      {icon && <S.Icon fontSize={fontSize} color={color} />}
      <S.AnchorComponent
        href={href}
        as={as}
        fontSize={fontSize}
        color={color}
        fontWeight={fontWeight}
        target={target}
      >
        {children}
      </S.AnchorComponent>
    </S.Container>
  ):(
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
