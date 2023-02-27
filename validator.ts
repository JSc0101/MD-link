import { existsSync, statSync, readdirSync, readFile } from "fs";
import { isAbsolute, resolve, extname } from "path";
import { LINK, VALIDATE } from "./interfaces/objectLink";
import { cwd } from "process";
import axios from "axios";

/**
 *
 * @param pathname | es la ruta
 * @returns validar si existe una path y devuelve un boolean
 */
const pathnameExist = (pathname: string): boolean => {
  const isValid = existsSync(pathname);
  return isValid ? true : false;
};

/**
 *
 * @param pathname es la ruta
 * @returns validar si la ruta es absoluta
 */
const validatorAbsolute = (pathname: string): boolean => {
  const absolute = isAbsolute(pathname);
  return absolute ? true : false;
};

/**
 *
 * @param pathname es la ruta relativa
 * @returns retorna una ruta absoluta
 */
const converToAbsolute = (pathname: string): string => {
  const CWD = cwd();
  return resolve(CWD, pathname);
};

/**
 *
 * @param pathname recibe el directorio
 * @returns retorna un boolean
 */
const isAdirectory = (pathname: string) => {
  const state = statSync(pathname);
  return state.isDirectory();
};

/**
 *
 * @param pathname recibe el direcctorio a leer
 * @returns retorna los archivos del directorio en forma de array
 */
const readFolder = (pathname: string) => {
  const files = readdirSync(pathname);
  return files;
};

/**
 *
 * @param pathname | recibe la ruta conn archivos MD
 * @returns return el archivo MD
 */
const isValidMD = (pathname: string) => {
  return extname(pathname) === ".md" ? true : false;
};

const getMdFiles = (pathname: string) => {
  let mdArray: Array<string> = [];

  if (isValidMD(pathname)) {
    mdArray.push(pathname);
  } else if (isAdirectory(pathname)) {
    const content = readFolder(pathname);
    content.map(
      (item) => (mdArray = mdArray.concat(getMdFiles(`${pathname}/${item}`)))
    );
  }
  return mdArray;
};

const pathReadFiles = (pathname: string) => {
  return new Promise((resolve, reject) => {
    readFile(pathname, "utf-8", (error, files) =>
      error ? reject(error) : resolve(files)
    );
  });
};

const validatePath = (pathname: string) => {
  return new Promise((resolve, reject) => {
    const pathResult: Array<object> = [];
    pathReadFiles(pathname)
      .then((data) => {
        let RegExpValidate =
          /\[([\w\s\d]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#]+[a-zA-Z0-9!-_$]+)\)/gi;

        if (typeof data === "string") {
          let matchPath = RegExpValidate.exec(data);

          while (matchPath !== null) {
            pathResult.push({
              href: matchPath[2],
              text: matchPath[1],
              file: pathname,
            });
            matchPath = RegExpValidate.exec(data);
          }
        }
        resolve(pathResult);
      })
      .catch((error) => reject(error));
  });
};

const validateLinks = (objectArray: Array<LINK>) => {
  return Promise.all(
    objectArray.map((object) =>
      axios
        .get(object.href)
        .then((res) => {
          const objectWithFiveprops = {
            ...object,
            status: res.status,
            OK: res.statusText ? res.statusText : 'fail',
          };
          return objectWithFiveprops;
        })
        .catch((error) => error)
    )
  );
};

const statsUnique = (objectArray: Array<LINK>) => {
  const resultHref = objectArray.map((link) => link.href);
  const notHrefRepeat = new Set(resultHref);

  return {
    totalFiles: resultHref.length,
    totalUnique: notHrefRepeat.size,
  };
};

const brokenLinks = (arrayObjects: Array<VALIDATE>) => {
  const linkBroken = arrayObjects.filter((objects) => objects.ok === "fail");
  return {
    totalFiles: arrayObjects.length,
    totalUnique: statsUnique(arrayObjects).totalUnique,
    broken: linkBroken.length,
  };
};

const getAllmdFiles = (pathname: string) => {
  if (pathnameExist(pathname)) {
    validatorAbsolute(pathname);
    converToAbsolute(pathname);
  }
  return getMdFiles(pathname);
};


export {
  pathnameExist,
  validatorAbsolute,
  converToAbsolute,
  isAdirectory,
  readFolder,
  isValidMD,
  getMdFiles,
  pathReadFiles,
  validatePath,
  validateLinks,
  statsUnique,
  brokenLinks,
  getAllmdFiles
};
