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

    test("should return a array with the options --validate", () => {
      return mdLink("README.md", ["--validate"]).then((result) => {
        if (typeof result === "string") {
          validatePath(result).then((data) => {
            expect(data).toEqual([]);
          });
        }
      });
    });

    test("should return a error", () => {
      const path = "./sas";
      const errorMessagee =
      "ENOENT: no such file or directory, stat './sas'"
      const options = ["--validate"];
      return expect(mdLink(path, options)).rejects.toThrowError(errorMessagee);
    });
  });
});
