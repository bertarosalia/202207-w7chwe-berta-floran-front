import { renderHook } from "@testing-library/react";
import { ProtoUser } from "../store/models/User";
import useRegister from "./useRegister";
describe("Given a use Register custom hook", () => {
  describe("When is called with a correct user", () => {
    test("Then it should send a post request", async () => {
      const testUser: ProtoUser = {
        userName: "Berta",
        password: "125",
      };

      global.fetch = jest.fn().mockReturnValue({
        json: jest.fn().mockReturnValue(testUser),
      });

      const {
        result: {
          current: { postRegister },
        },
      } = renderHook(useRegister);

      const mockResult: ProtoUser = await postRegister(testUser);

      expect(mockResult).toEqual(testUser);
    });
  });
});
