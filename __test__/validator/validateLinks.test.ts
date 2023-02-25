import axios from "axios";
import { validateLinks } from "../../validator";
import { LINK } from "../../interfaces/objectLink";

jest.mock("axios");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("function validate", () => {
  describe("everything related to the validateLinks function", () => {
    test("should return an array of objects", () => {
      const firstObjectResolve: LINK = {
        file: "asjkakd",
        href: "https://i.postimg.cc/4NP5661b/450-1000.jpg",
        text: "ssa",
      };
      const secondObjectError: LINK = {
        text: "ajskda,",
        href: "http://example.com",
        file: "adas",
      };

      const objectsArray: Array<LINK> = [firstObjectResolve, secondObjectError];


      const mockedAxios = axios as jest.Mocked<typeof axios>;

      mockedAxios.get
        .mockResolvedValueOnce({
          data: {
            href: "https://i.postimg.cc/4NP5661b/450-1000.jpg",
            status: 200,
            OK: "OK",
          },
        })
        .mockRejectedValueOnce({ response: { status: 404 } });

      validateLinks(objectsArray).then((result) => {
        expect(result).toHaveLength(2);
        console.log(result);
      });
    });
  });
});
