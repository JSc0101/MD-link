import { getMdFiles } from "../../validator";
import { pathConcurrent, mdArr, pathEmpty } from "./pathname";

describe("funtion getMdFiles", () => {
  describe("everything related to the getMdFiles function", () => {
    test("should be a function", () => {
      expect(typeof getMdFiles).toEqual("function");
    });

    test("should return a array", () => {
      expect(getMdFiles(pathConcurrent)).toEqual(mdArr);
    });

    test("should return a array", () => {
      expect(getMdFiles(pathEmpty)).toEqual([]);
    });
  });
});
