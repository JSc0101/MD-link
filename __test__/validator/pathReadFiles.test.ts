import { pathReadFiles } from "../../validator";
import { readFilePath, pathEmpty } from "./pathname";

describe("function pathReadFiles", () => {
  describe("everything related to the pathReadFiles function", () => {
    test("should read the file", () => {
      pathReadFiles(readFilePath).then((file) => {
        if (typeof file === "string") {
          expect(file.trim()).toBe("# hello world");
        }
      });
    });

    test("should throw an error", () => {
      expect(pathReadFiles(pathEmpty)).rejects.toThrowError(
        "EISDIR: illegal operation on a directory, read"
      );
    });
  });
});
