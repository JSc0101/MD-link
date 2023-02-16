import { validatorAbsolute } from "../../validator";
import { pathTruthy, pathFalsy } from "./pathname";

describe("function validatorAbsolute", () => {
  describe("everything related to the validatorAbsolute function", () => {
    test("should be a function", () => {
      expect(typeof validatorAbsolute).toBe("function");
    });

    test("should be a false", () => {
      expect(validatorAbsolute(pathFalsy)).toBeFalsy();
    });

    test("should be a true", () => {
      expect(validatorAbsolute(pathTruthy)).toBeTruthy();
    });
  });
});
