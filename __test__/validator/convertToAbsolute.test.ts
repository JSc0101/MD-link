import { converToAbsolute } from "../../validator";
import { pathRelative } from "./pathname";

describe("function converToAbsolute", () => {
  describe("the converToAbsolute function test", () => {
    test("should return an path absolute", () => {
      expect(converToAbsolute(pathRelative)).toContain(
        "C:\\Users\\NICOLAS\\Desktop\\MD-Link\\__test__\\files\\others\\testing.md"
      );
    });
  });
});
