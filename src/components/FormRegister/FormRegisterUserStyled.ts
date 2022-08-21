import styled from "styled-components";

const FormRegisterUserStyled = styled.main`
  margin: auto;
  background-color: #76d7c4;
  border-radius: 20px;
  display: flex;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 60px 30px;

  .register-title {
    font-size: 30px;
    color: #030001;
    text-align: center;
  }

  .input {
    padding-top: 10px;
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

  .register-button {
    background-color: #23c403;
  }
`;

export default FormRegisterUserStyled;
