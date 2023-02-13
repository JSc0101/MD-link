import { pathnameExist } from "../validator";

const pathFalsy: string = "C:UsersNICOLASDocumentsFundamentos-NEXT.jsREADME.md";
const pathTruthy: string =
  "C:/Users/NICOLAS/Desktop/MD-Link/__test__/files/helloWorld.md";

describe("function test pathnameExist", () => {
  test("should be a function", () => {
    expect(typeof pathnameExist).toBe("function");
  });

  test("should be a false", () => {
    expect(pathnameExist(pathFalsy)).toBeFalsy();
  });

  test("should be a true", () => {
    expect(pathnameExist(pathTruthy)).toBeTruthy();
  });
});
