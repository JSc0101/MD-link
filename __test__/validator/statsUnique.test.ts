import { statsUnique } from "../../validator";
import { LINK } from "../../interfaces/objectLink";

describe("function statsUnique", () => {
  describe("everything related to the statsUnique function", () => {
    test("should return an object", () => {
      const arrayObjects: Array<LINK> = [
        {
          file: "file",
          href: "",
          text: "content",
          status: 200,
          OK: "OK",
        },
      ];

      const result = statsUnique(arrayObjects)
      expect(result).toBeInstanceOf(Object)
    });

    test("should return the length", () => {
      const arrayObjects: Array<LINK> = [
        {
          file: "file",
          href: "https://example.com",
          text: "content",
          status: 200,
          OK: "OK",
        },
        {
          file: "file",
          href: "https://example.com",
          text: "content",
          status: 200,
          OK: "OK",
        },
      ];

      const result = statsUnique(arrayObjects)

      expect(result.totalFiles).toBe(2)
      expect(result.totalUnique).toBe(1)
    })
  });
});
