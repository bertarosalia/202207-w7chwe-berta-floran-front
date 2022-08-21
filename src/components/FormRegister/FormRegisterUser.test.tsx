import { render, screen } from "@testing-library/react";
import FormRegisterUser from "./FormRegisterUser";

describe("Given an user register form component", () => {
  describe("When instantiated", () => {
    test("It should show a h1 with 'Register Form' inside", () => {
      render(<FormRegisterUser />);

      const headingExpected = screen.getByRole("heading");

      expect(headingExpected).toBeInTheDocument();
    });
  });
});
