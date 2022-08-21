import { ProtoUser } from "../store/models/User";

const useRegister = () => {
  const postRegister = async (newUser: ProtoUser) => {
    const url = process.env.REACT_APP_API_URL as string;

    const response = await fetch(`${url}user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    const registerResponse: ProtoUser = await response.json();

    return registerResponse;
  };

  return { postRegister };
};
export default useRegister;
