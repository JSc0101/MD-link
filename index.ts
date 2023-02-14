import { pathnameExist } from "./validator";

/**
 *
 * @param path | este parametro recibe la ruta a evaluar
 * @param options |  un array de opciones de comando
 * @returns | mi funcion retorna una promesa
 * ! es indipensable que la funcion mdLink lleve sus dos parametros
 */
export const mdLink = (path: string, options: Array<string>) => {
  /**
   * @param resolve | es lo que debe resolverse
   * @param reject | rechaza si la promesa no se cumple
   */
  return new Promise((resolve, reject) => {
    /**
     * ! options[] no puede estar undefined
     */
    if (options[0] === undefined && options[1] === undefined) {
      reject("error ruta undefined");
    }
    console.log(`${resolve('very so good')} ${path}`)
  });
};
