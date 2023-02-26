import { brokenLinks } from "../../validator";
import { VALIDATE } from "../../interfaces/objectLink";

describe("function brokenLinks", () => {
  describe("everything related to the brokenLinks function", () => {
    test("should return an objects", () => {
      const arrayObjects: Array<VALIDATE> = [
        {
          file: "",
          href: "https://example.com",
          text: "",
          status: 404,
          ok: "fail",
        },
      ];
      const result = brokenLinks(arrayObjects);
      expect(result).toBeInstanceOf(Object);
    });

    test("should return all the broken", () => {
      const arrayObjects: Array<VALIDATE> = [
        {
          file: "",
          href: "https://example.com",
          text: "",
          status: 404,
          ok: "fail",
        },
        {
          file: "",
          href: "https://example.com",
          text: "",
          status: 404,
          ok: "fail",
        },
      ];
      const result = brokenLinks(arrayObjects);
      expect(result.broken).toBe(2);
    });
  });
});
