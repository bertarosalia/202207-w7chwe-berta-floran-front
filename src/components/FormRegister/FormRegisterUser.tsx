import { SyntheticEvent, useState } from "react";
import useRegister from "../../hooks/useRegister";
import { ProtoUser } from "../../store/models/User";
import FormRegisterUserStyled from "./FormRegisterUserStyled";

const RegisterUserForm = () => {
  const initialUser: ProtoUser = {
    userName: "",
    password: "",
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
          <h1 className="register-title">Register form</h1>
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <label className="name">Name</label>
              <input
                type="text"
                className="user-name"
                placeholder="userName"
                required
                autoComplete="off"
                value={userRegisterData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="form-inputs">
              <label className="password">Password</label>

              <input
                type="text"
                className="password"
                placeholder="password"
                required
                autoComplete="off"
                value={userRegisterData.password}
                onChange={handleChange}
              />
            </div>
            <button className="register" type="submit">
              Register
            </button>
          </form>
        </div>
      </FormRegisterUserStyled>
    </>
  );
};

export default RegisterUserForm;
