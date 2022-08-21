import styled from "styled-components";

const FormRegisterUserStyled = styled.main`
  margin: auto;
  background-color: #76d7c4;
  opacity: 50%;
  border-radius: 20px;
  display: flex;
  width: fit-content;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 60px 30px;

  .register-title {
    font-size: 30px;
    text-align: center;
  }

  .use-name & .password {
  }
  .form-inputs {
    display: flex;
    flex-direction: column;
  }
  .register-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .register-container {
    margin: auto;
  }
`;

export default FormRegisterUserStyled;
