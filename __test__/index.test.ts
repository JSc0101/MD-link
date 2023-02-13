import { pathnameExist, validatorAbslute } from "../validator";

const pathFalsy: string = "css/README.md";
const pathTruthy: string =
  "C:/Users/NICOLAS/Desktop/MD-Link/__test__/files/helloWorld.md";

describe("the  pathname function test", () => {
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

describe("the  isAbsolute function test", () => {
  test("should be a function", () => {
    expect(typeof validatorAbslute).toBe("function");
  });

  test("should be a false", () => {
    expect(validatorAbslute(pathFalsy)).toBeFalsy();
  });

  test('should be a true', () => {
    expect(validatorAbslute(pathTruthy)).toBeTruthy()
  })
});
