tuto: https://www.youtube.com/watch?v=9qJKmesjTd8

npx create-next-app@latest --ts

npm install -D prisma

npm install @prisma/client

npx prisma init

> .env

```
DATABASE_URL="postgres://user:password@host/dbname"
SHADOW_DATABASE_URL="postgres://jfps.dev21:oh3l5OigAVDJ@ep-delicate-frost-675944.eu-central-1.aws.neon.tech/neondb"
```

> schema.prisma

```
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
```

(if we do a migration don't need generate because the migration do the generation)

npx prisma generate

npx prisma migrate dev --name init

npx prisma studio

npx prisma migrate reset

lancer le serveur : yarn dev

lancer le seed : yarn seed

prisma migrate reset
npx prisma db seed

---

Commit rules:

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
