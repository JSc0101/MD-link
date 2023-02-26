import { getAllmdFiles } from "../../validator";
import { pathArrMd } from "./pathname";

describe("funcion getAllmdFiles", () => {
  describe("everything related to the getAllmdFiles function", () => {
    test("should return an Array", () => {
      const result = getAllmdFiles(pathArrMd);
      expect(result).toBeInstanceOf(Array);
    });

    test("should return paths", () => {
      const result = getAllmdFiles(pathArrMd);
      result.forEach((path) => {
        expect(path).toBeDefined();
      });
    });
  });
});
