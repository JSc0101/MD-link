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
      };
      const arrayObject: Array<LINK> = [resolveObject];
      mockedAxios.get.mockResolvedValue({ status: 200, statusText: "OK" });
      validateLinks(arrayObject).then((result) => {
        expect(result).toBeInstanceOf(Array);
        result.forEach((element) => {
          expect(element.OK).toBe("OK");
          expect(element.status).not.toBe(404);
        });
      });
    });

    test("should return an status 404 ", () => {
      const arrayObject: Array<LINK> = [
        {
          file: "file",
          href: "https://example.com",
          text: "content",
        },
      ];

      mockedAxios.get.mockResolvedValueOnce({ status: 404, statusText: "fail" });

      validateLinks(arrayObject).then((result) => {
        result.forEach((element) => {
          expect(element.OK).toBe("fail");
          expect(element.status).not.toBe(200);
        });
      });
    });
  });
});
