import * as S from "./styles";

const Text = ({ children, fontSize, margin, color, as, fontWeight }) => (
  <S.TextComponent as={as} fontSize={fontSize} margin={margin} color={color} fontWeight={fontWeight}>
    {children}
  </S.TextComponent>
);

export default Text;
