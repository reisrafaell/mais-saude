import { useState } from "react";
import { Container, Icon, Label, Input, Button } from "./styles";
import password from "../../assets/password.png"
import email from "../../assets/email.png"

const InputComponent = ({type, placeholder, onChangeText, value, label, showError }) => {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>
      <Input
        showError={showError}
        onChange={onChangeText}
        value={value}
        type={type === "text" || show === true ? false : true}
        placeholder={placeholder}
      ></Input>
      {type === "text" ? (
        <Icon src={email} />
      ) : (
        <Button onClick={() => (show ? setShow(false) : setShow(true))}>
          <Icon src={password} />
        </Button>
      )}
    </Container>
  );
};

export default InputComponent;
