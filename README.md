## MD Link

## indice

- Preambulo
- Instalacion
- Uso
- Author

## Preambulo

- mdLinks es una herramienta de node js que nos ayuda a validar archivos `markdown`, permitiendonos saber:

1. cantidad de links
2. links roto
3. links unicos.

## Instalacion

- para instalar esta herramienta te sugerimos continuar los siguientes pasos:

1. instalar mdLinks de forma global

```
npm install -g  mdLinks
```

2. También puedes instalar mdLinks como una dependencia de desarrollo:

```
npm install mdLinks --save-dev
```

## Uso

- una vez instalada la herramienta a su proyecto , continua los siguientes pasos:

1. si lo instaló de forma global solo es llamar la herramienta y pasarle el archivo `markdown`

```
mdLinks <path-name-file.md>
```

2. si lo instaló como una dependecia de desarrollo utilice el siguiente comando:

```
npx mdLinks <path-name-file.md>
```

- obtendra informacion de todos los links encontrados en su archivo `.md`

```js
[
  {
    file: "name of your file",
    link: "name of the link",
    text: "content of the link"
  },
  {
    file: "name of your file",
    link: "name of the link",
    text: "content of the link"
  },
  {
    file: "name of your file",
    link: "name of the link",
    text: "content of the link"
  }
]
```

### Opcion validate

- puedes usar la opcion `--validate` para comprobar el estado de su link, para usarlo siga los siguientes pasos:

```
mdLinks <path-name-file.md> --validate
```

```
npx mdLinks <path-name-file.md> --validate
```

- tendra el siguiente resultado:

```js

[
  {
    file: "name of your file",
    link: "name of the link",
    text: "content of the link",
    status: 200,
    OK: "OK"
  },
  {
    file: "name of your file",
    link: "name of the link",
    text: "content of the link",
    status: 200,
    OK: "OK"
  },
  {
    file: "name of your file",
    link: "name of the link",
    text: "content of the link",
    status: 200,
    OK: "OK"
  }
]
```

### Opcion stats

- puedes usar la opcion `--stats` si deseas ver las estadisticas de tus links,ejecuta el siguiente comando :

```
mdLinks <path-name-file.md> --stats
```

```
npx mdLinks <path-name-file.md> --stats
```

- obtendras el siguiente resultado:

```js
[
  {
    totalFiles: 00,
    totalUnique: 00
  },
    {
    totalFiles: 00,
    totalUnique: 00
  },
    {
    totalFiles: 00,
    totalUnique: 00
  }
]
```

- obtendras una pequeña estadisticas de la cantidad de link que hay y sobre ttodo los links que no se repiten en tu archivo `md`

### validate & stats

- si usas la opcion `--validate` y la opcion `--stats` obtendras una seccion especial , y es poder ver los links que no se encuentran en funcionamiento

- ejecuta el siguiente comando:

```
mdLinks <path-name-file.md> --validate --stats
```

```
npx mdLinks <path-name-file.md> --validate --stats
```

- obtendras el siguiente resultado:

```js
[
  {
    totalFiles: 00,
    totalUnique: 00,
    broken: 0,
  },
    {
    totalFiles: 00,
    totalUnique: 00,
    broken: 0,
  },
    {
    totalFiles: 00,
    totalUnique: 00,
    broken: 0
  }
]
```


## Author

- @Sebastian009w
- johancs.mm@gmailcom
