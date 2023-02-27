import {
  getAllmdFiles,
  validatePath,
  brokenLinks,
  validateLinks,
  statsUnique,
} from "./validator";

/**
 *
 * @param path | este parametro recibe la ruta a evaluar
 * @param options |  un array de opciones de comando
 * @returns | mi funcion retorna una promesa
 * ! es indipensable que la funcion mdLink lleve sus dos parametros
 */
export const mdLink = (path: string, options: Array<string>) => {
  return new Promise((resolve, reject) => {
    if (options[0] === undefined && options[1] === undefined) {
      console.log("no se ha especificado la option");
      const pathnameArr = getAllmdFiles(path);
      pathnameArr.forEach((elem) => {
        validatePath(elem)
          .then((result) => {
            resolve(result);
            if (result instanceof Object) {
              if (Object.keys(result).length === 0) {
                console.log(elem);
                console.log("Tu archivo no tiene links");
              } else {
              }
            }
          })
          .catch((error) => reject(error));
      });
    } else {
      if (
        (options[0] === "--validate" && options[1] === "--stats") ||
        (options[0] === "--stats" && options[1] === "--validate")
      ) {
        console.log("si hay una opcion");

        const patnameArr = getAllmdFiles(path);
        patnameArr.forEach((elem) => {
          validatePath(elem)
            .then((result) => {
              if (result instanceof Object) {
                if (Object.keys(result).length === 0) {
                  console.log(elem);
                  console.log("Tu archivo no tiene links");
                }
              }
              if (result instanceof Array) {
                resolve(brokenLinks(result));
                brokenLinks(result);
              }
            })
            .catch((error) => reject(error));
        });
      } else if (options[0] === "--validate") {
        console.log("validacion");
        const pathnameArr = getAllmdFiles(path);
        pathnameArr.forEach((elem) => {
          validatePath(elem)
            .then((result) => {
              if (result instanceof Array) {
                validateLinks(result).then((result) => {
                  resolve(result);
                  if (result instanceof Object) {
                    if (Object.keys(result).length === 0) {
                      console.log(elem);
                      console.log("Tu archivo no tiene links");
                    } else {
                      console.log(result);
                    }
                  }
                });
              }
            })
            .catch((error) => reject(error));
        });
      } else if (options[0] === "--stats") {
        const pathnameArr = getAllmdFiles(path);
        pathnameArr.forEach((elem) => {
          validatePath(elem).then((result) => {
            if (result instanceof Array) {
              resolve(statsUnique(result));
            }
            if (result instanceof Object) {
              if (Object.keys(result).length === 0) {
                console.log(elem);
                console.log("Tu archivo no tiene links");
              } else {
                console.log(result);
              }
            }
          });
        });
      }
    }
  });
};
