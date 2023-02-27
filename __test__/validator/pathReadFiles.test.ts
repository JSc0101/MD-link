import { pathReadFiles } from "../../validator";
import { readFile } from "fs";
import { promisify } from "util";

promisify(readFile);

describe("pathReadFiles", () => {
  test("should resolve with file content when file exists", () => {
    const testFileContent = "Test file content";
    const testFilePath = "./testFile.txt";

    require("fs").writeFileSync(testFilePath, testFileContent);

    return pathReadFiles(testFilePath)
      .then((content) => {
        expect(content).toEqual(testFileContent);
      })
      .finally(() => {
        require("fs").unlinkSync(testFilePath);
      });
  });

  test("should reject with error when file does not exist", () => {
    let errorMessagee = new Error(
      "ENOENT: no such file or directory, open 'C:\\Users\\NICOLAS\\Desktop\\MD-Link\\nonExistentFile.txt'"
    );
    const nonExistentFilePath = "./nonExistentFile.txt";
    return expect(pathReadFiles(nonExistentFilePath)).rejects.toThrowError(
      errorMessagee
    );
  });
});
