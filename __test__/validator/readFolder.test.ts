import { readFolder } from "../../validator";
import { readFiles } from "./pathname";

describe("function readFolder", () => {
  describe("everything related to the readFolder function", () => {
    test("should return an array", () => {
      return expect(readFolder(readFiles)).toContain("markdown");
    });
  });
});
