import { isValidMD } from "../../validator";
import { pathTruthy , pathFalsy} from "./pathname";

describe("funtion isAdirectory", () => {
  describe("should return an directory", () => {
    test("should be a function", () => {
      expect(typeof isValidMD).toEqual("function");
    });

    test("should return an true", () => {
      expect(isValidMD(pathTruthy)).toBeTruthy()
    });

    test("should return an true", () => {
      expect(isValidMD(pathFalsy)).toBeFalsy()
    });
  });
});
