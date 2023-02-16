import { isAdirectory } from "../../validator";
import { directory, pathRelative } from "./pathname";

describe("funtion isAdirectory", () => {
  describe("should return an directory", () => {
    test("should be a function", () => {
      expect(typeof isAdirectory).toEqual("function");
    });

    test("should be a true", () => {
      expect(isAdirectory(directory)).toBeTruthy();
    });

    test("should be a false", () => {
      expect(isAdirectory(pathRelative)).toBeFalsy();
    });
  });
});
