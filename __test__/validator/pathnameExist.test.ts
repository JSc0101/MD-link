import { pathnameExist } from "../../validator";
import { pathTruthy, pathFalsy } from "./pathname";

describe("function pathnameExist", () => {
  describe("everything related to the pathExist function", () => {
    test("should be a false", () => {
      expect(pathnameExist(pathFalsy)).toBeFalsy();
    });

    test("should be a true", () => {
      expect(pathnameExist(pathTruthy)).toBeTruthy();
    });
  });
});
