import { existsSync, statSync } from "fs";
import { isAbsolute, resolve } from "path";
import { cwd } from "process";

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

const isAdirectory = (pathname: string) => {
  const state = statSync(pathname);
  return state.isDirectory() ? true : false;
};

export { pathnameExist, validatorAbsolute, converToAbsolute, isAdirectory };
