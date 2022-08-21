import { SyntheticEvent, useState } from "react";
import useRegister from "../../hooks/useRegister";
import { ProtoUser } from "../../store/models/User";
import FormRegisterUserStyled from "./FormRegisterUserStyled";

const RegisterUserForm = () => {
  const initialUser: ProtoUser = {
    userName: "",
    password: "",
    eMail: "",
    dateOfBirth: "",
  };

  const [userRegisterData, setUserRegisterData] = useState(initialUser);
  const { postRegister } = useRegister();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegisterData({
      ...userRegisterData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    postRegister(userRegisterData);
    setUserRegisterData(initialUser);
  };

  return (
    <>
      <FormRegisterUserStyled>
        <div className="register-container">
          <h1 className="register-title">Not registered yet?</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                id="name"
                type="text"
                name="userName"
                className="input"
                placeholder="Name"
                required
                autoComplete="off"
                value={userRegisterData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <input
                id="password"
                name="password"
                type="text"
                className="input"
                placeholder="password"
                required
                autoComplete="off"
                value={userRegisterData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <input
                id="email"
                name="eMail"
                type="email"
                className="input"
                placeholder="E-mail"
                required
                autoComplete="off"
                value={userRegisterData.eMail}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                className="input"
                placeholder="Date of birth"
                required
                autoComplete="off"
                value={userRegisterData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <button className="register-button" type="submit">
              Register
            </button>
          </form>
        </div>
      </FormRegisterUserStyled>
    </>
  );
};

export default RegisterUserForm;
