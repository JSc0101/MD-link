import { mdLink } from "./index";

mdLink(
  "C:/Users/NICOLAS/Desktop/MD-Link/__test__/files/helloWorld.m",
  "--validate"
)
  .then((path) => {
    console.log(path);
  })
  .catch((error: string) => {
    console.log(error);
  });
