import { existsSync } from "fs";
import { isAbsolute } from "path";

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
const validatorAbslute = (pathname: string):boolean => {
  const absolute = isAbsolute(pathname);
  return absolute ? true : false
};

export { pathnameExist , validatorAbslute};
