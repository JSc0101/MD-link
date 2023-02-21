import { mdLink } from "../index";


describe("function mdLink", () => {

    describe("everything related to the mdLink function", () => {
        test("should be a Promise", () => {
          let result = mdLink("http://localhost:3000", ["--validate"])
          expect(result).toBeInstanceOf(Promise)
        })
    })
})
