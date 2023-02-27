import {
  getAllmdFiles,
  validatePath,
  brokenLinks,
  validateLinks,
  statsUnique,
} from "./validator";

export const mdLink = (path: string, options: Array<string>) => {
  return new Promise((resolve, reject) => {
    if (options[0] === undefined && options[1] === undefined) {
      const pathnameArr = getAllmdFiles(path);
      pathnameArr.forEach((elem) => {
        validatePath(elem).then((result) => resolve(result));
      });
    } else {
      if (
        (options[0] === "--validate" && options[1] === "--stats") ||
        (options[0] === "--stats" && options[1] === "--validate")
      ) {
        const patnameArr = getAllmdFiles(path);
        patnameArr.forEach((elem) => {
          validatePath(elem).then((result) => {
            if (Array.isArray(result)) {
              return resolve(brokenLinks(result));
            }
          });
        });
      } else if (options[0] === "--validate") {
        const pathnameArr = getAllmdFiles(path);
        pathnameArr.forEach((elem) => {
          validatePath(elem)
            .then((result) => {
              if (Array.isArray(result)) {
                validateLinks(result).then((result) => resolve(result));
              }
            })
            .catch((error) => reject(error));
        });
      } else if (options[0] === "--stats") {
        const pathnameArr = getAllmdFiles(path);
        pathnameArr.forEach((elem) => {
          validatePath(elem).then((result) => {
            if (Array.isArray(result)) {
              resolve(statsUnique(result));
            }
          });
        });
      }
    }
  });
};
