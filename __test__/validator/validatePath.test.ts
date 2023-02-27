import { validatePath } from "../../validator";
import { pathArrMd, arrFilemd } from "./pathname";


describe("function validatePath", () => {
  describe("everything related to the validatePath function", () => {
    test("should return an array", () => {
      return validatePath(pathArrMd).then((data) => {
        expect(data).toBeInstanceOf(Array)
        expect(data).toEqual(arrFilemd)
      })
    });

    test("should an promise", () => {
      return validatePath(pathArrMd).then((data) => {
        expect(data instanceof Array).toBeTruthy();
      });
    });

    test("should reject the promise with an error", () => {
      const errorMessagee =
        "ENOENT: no such file or directory, open 'C:\\Users\\NICOLAS\\Desktop\\MD-Link\\non-existent-file.md'";
      return expect(validatePath("non-existent-file.md")).rejects.toThrowError(
        errorMessagee
      );
    });
  });
});
