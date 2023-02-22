import { pathReadFiles } from "../../validator";
import { readFile } from "fs";
import { promisify } from "util";

promisify(readFile);

describe("pathReadFiles", () => {
  test("should resolve with file content when file exists", () => {
    const testFileContent = "Test file content";
    const testFilePath = "./testFile.txt";

    // Write test file
    require("fs").writeFileSync(testFilePath, testFileContent);

    return pathReadFiles(testFilePath)
      .then((content) => {
        expect(content).toEqual(testFileContent);
      })
      .finally(() => {
        // Delete test file
        require("fs").unlinkSync(testFilePath);
      });
  });

  test("should reject with error when file does not exist", () => {
    const nonExistentFilePath = "./nonExistentFile.txt";
    return expect(pathReadFiles(nonExistentFilePath)).rejects.toThrow();
  });
});
