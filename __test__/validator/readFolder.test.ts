import { readFolder } from "../../validator";
import { readFiles } from "./pathname";

describe("function readFolder", () => {
  describe("everything related to the readFolder function", () => {
    test("should be a function", () => {
      expect(typeof readFolder).toEqual("function");
    });

    test("should return an array", () => {
      expect(readFolder(readFiles)).toContain("markdown");
    });
  });
});
