import { mdLink } from "./index";

mdLink("README.md", ["--validate"])
  .then((path) => {
    console.log(path);
  })
  .catch((error: string) => {
    console.log(error);
  });
