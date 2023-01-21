import { Img } from "./styles";

const Image = ({img, width}) => {

  return (
        <Img src={img} width={width} />
  );
};

export default Image;
