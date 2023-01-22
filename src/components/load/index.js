import * as S from "./load.styles";

import { Dna } from "react-loader-spinner";

const Load = ({ active }) => {
  return (
    <S.Section active={active}>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </S.Section>
  );
};

export default Load;
