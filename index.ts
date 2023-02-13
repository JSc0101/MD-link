import { pathnameExist } from "./validator";

export const mdLink = (path: string, options: string) => {
  return new Promise((resolve, reject) => {
    if (options === undefined) {
      reject("error ruta undefined");
    } else {
      pathnameExist(path);
      resolve("is valid");
    }
  });
};
