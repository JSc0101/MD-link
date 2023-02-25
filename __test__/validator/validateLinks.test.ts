import axios from "axios";
import { validateLinks } from "../../validator";
import { LINK } from "../../interfaces/objectLink";

jest.mock("axios");

beforeEach(() => {
  jest.resetAllMocks();
});

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("function validate", () => {
  describe("everything related to the validateLinks function", () => {
    test("should return an array of objects", () => {
      const resolveObject: LINK = {
        file: "",
        href: "https://i.postimg.cc/4NP5661b/450-1000.jpg",
        text: "content",
        status: 200,
        OK: "OK",
      };
      const arrayObject: Array<LINK> = [resolveObject];
      mockedAxios.get.mockResolvedValue(resolveObject);
      validateLinks(arrayObject).then((result) => {
        expect(result).toBeInstanceOf(Array);
      });
    });

    test("should return an status 404 ", () => {
      const arrayObject: Array<LINK> = [
        {
          file: "file",
          href: "https://example.com",
          text: "content",
          status: 404,
          OK: "fail",
        },
      ];

      mockedAxios.get.mockResolvedValueOnce(arrayObject[0]);

      validateLinks(arrayObject).then((result) => {
        result.forEach((element) => {
          expect(element.status).not.toBe(200)
        })
      });
    });
  });
});
