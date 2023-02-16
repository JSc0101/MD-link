import {
  pathnameExist,
  validatorAbsolute,
  converToAbsolute,
  isAdirectory,
} from "../validator";

const pathFalsy: string = "css/README.md";
const pathTruthy: string =
  "C:/Users/NICOLAS/Desktop/MD-Link/__test__/files/helloWorld.md";
const pathRelative = "__test__/files/others/testing.md";
const directory = "C:/Users/NICOLAS/Desktop/MD-Link/__test__/files";

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
    expect(typeof validatorAbsolute).toBe("function");
  });

  test("should be a false", () => {
    expect(validatorAbsolute(pathFalsy)).toBeFalsy();
  });

  test("should be a true", () => {
    expect(validatorAbsolute(pathTruthy)).toBeTruthy();
  });
});

describe("the converToAbsolute function test", () => {
  test("should be a function", () => {
    expect(typeof converToAbsolute).toEqual("function");
  });

  test("should return an path absolute", () => {
    expect(converToAbsolute(pathRelative)).toContain(
      "C:\\Users\\NICOLAS\\Desktop\\MD-Link\\__test__\\files\\others\\testing.md"
    );
  });
});

describe("should return an directory", () => {
  test("should be a function", () => {
    expect(typeof isAdirectory).toEqual("function");
  });

  test("should be a true", () => {
    expect(isAdirectory(directory)).toBeTruthy();
  });

  test("should be a false", () => {
    expect(isAdirectory(pathRelative)).toBeFalsy();
  });
});
