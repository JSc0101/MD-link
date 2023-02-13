import { existsSync } from "fs";

const pathnameExist = (pathname: string): boolean => {
  const isValid = existsSync(pathname);
  return isValid ? true : false;
};


export { pathnameExist };
