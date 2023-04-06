tuto: https://www.youtube.com/watch?v=9qJKmesjTd8

npx create-next-app@latest --ts

npm install -D prisma

npm install @prisma/client

npx prisma init

# .env

DATABASE_URL="postgres://user:password@host/dbname"
SHADOW_DATABASE_URL="postgres://jfps.dev21:oh3l5OigAVDJ@ep-delicate-frost-675944.eu-central-1.aws.neon.tech/neondb"

# schema.prisma

model Log {
id String @id @default(uuid())
message String
level Level
meta Json
}

enum Level {
Warning
Info
Error
}

# Commit rules:

- if the task isn't finish add wip to the description
- for the PATH it's "nameProject-api" or "nameProject-front" we've to indicate if it's front or api, this will be usefull to go to a monorepo
- to change the rule of the commit you've to go in the commitlint.config.js file (cf the example where we disable the length of the message which was 100 max)

- feat : is used when you add or continue to work on a fonctionnality
- fix : is used when you fixed, correct a bug
- docs : is used when you add or update the documentation of the project
- build : initialization of the project
- chore : work on ----- other than the build
- pref : improve the performance
- refactor : refatorisation of code
- style : changement of
- test : add or update code test

- Example of a "good" commit
  feat(path): "description what you did"
  fix(path): "description what you fixed"

# Turborepo react-native starter

This is an official starter Turborepo.

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit vercel/turbo/examples/with-react-native-web with-react-native-web
cd with-react-native-web
yarn install
git init . && git add . && git commit -m "Init"
```
