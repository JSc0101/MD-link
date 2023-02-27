import { mdLink } from "../index";
import { validatePath } from "./../validator";

describe("function mdLink", () => {
  describe("everything related to the mdLInks function", () => {
    test("should return a promise", () => {
      return mdLink("README.md", []).then((path) => {
        expect(path).toBeInstanceOf(Array);
      });
    });

    test("should array de objects", () => {
      return mdLink("README.md", ["--stats"]).then((result) => {
        expect(result).toEqual({
          totalFiles: 2,
          totalUnique: 2,
        });
      });
    });

    test("should", () => {
      return mdLink("README.md", ["--validate", "--stats"]).then((result) => {
        expect(result).toEqual({
          totalFiles: 2,
          totalUnique: 2,
          broken: 0,
        });
      });
    });

    test("should", () => {
      return mdLink("README.md", ["--validate", "--stats"]).then((result) => {
        if (typeof result === "string") {
          validatePath(result).then((data) => {
            expect(data).toEqual([]);
          });
        }
      });
    });

    test('should return an array of links with validation information when called with the "--validate" option', () => {
      const path = "./README.md";
      const options = ["--validate"];
      return mdLink(path, options).then((result) => {
        expect(Array.isArray(result)).toBe(true);
      });
    });

    test("error", () => {
      const path = "./sas";
      const errorMessagee =
      "ENOENT: no such file or directory, stat './sas'"
      const options = ["--validate"];
      return expect(mdLink(path, options)).rejects.toThrowError(errorMessagee);
    });
  });
});
