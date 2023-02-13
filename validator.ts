import { existsSync } from "fs";
import { isAbsolute } from "path";

const pathnameExist = (pathname: string): boolean => {
  const isValid = existsSync(pathname);
  return isValid ? true : false;
};


const validatorAbslute = (pathname: string):boolean => {
  const absolute = isAbsolute(pathname);
  return absolute ? true : false
};

export { pathnameExist , validatorAbslute};
