import { validatorAbsolute } from "../../validator";
import { pathTruthy, pathFalsy } from "./pathname";

describe("function validatorAbsolute", () => {
  describe("everything related to the validatorAbsolute function", () => {
    test("should be a false", () => {
      return expect(validatorAbsolute(pathFalsy)).toBeFalsy();
    });

    test("should be a true", () => {
      return expect(validatorAbsolute(pathTruthy)).toBeTruthy();
    });
  });
});
