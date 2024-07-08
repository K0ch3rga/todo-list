# todo-list

## Stack

- **Framework**: Vue3
- **Language**: Typescript
- **State manager**: [Pinia](https://pinia.vuejs.org/)
- **Database**: [json-server](https://github.com/typicode/json-server)
- **UI kit**: [Quasar](https://quasar.dev/start/vite-plugin)
- **Architecture**: [FSD](https://feature-sliced.design/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

generate and paste into `.env` random word-numeric string with more than 50 symbols with name `VITE_PRIVATE_KEY`

### Compile and Hot-Reload for Development

```sh
npm run dev
```

and

```sh
npx json-server db.json
```

for database

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
