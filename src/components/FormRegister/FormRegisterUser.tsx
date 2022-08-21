import FormRegisterUserStyled from "./FormRegisterUserStyled";

const RegisterUserForm = () => {
  return (
    <>
      <FormRegisterUserStyled>
        <div className="register-container">
          <h1 className="register-title">Register form</h1>
          <form className="register-form">
            <div className="form-inputs">
              <label className="name">Name</label>
              <input
                type="text"
                className="user-name"
                placeholder="userName"
                required
                autoComplete="off"
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
