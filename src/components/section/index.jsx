import * as S from "./section.styles";

const Section = ({children}) => {

  return (
    <S.Container>
      {children}
    </S.Container>
  );
};
export default Section;
