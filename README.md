# nestjs-monorepo-poc

I made a pnpm monorepo with an "api" package which is a NestJs app, and a "shared" package with .ts files.

What is working :

in the shared/package.json, the "main" is "./dist/index.js"
I build the shared package with swc in watch mode
-> this is the before last commit of the exemple repo

What is not working :

in the shared/package.json, the "main" is "./index.ts"
I run the NestJS app with nest start -w
For your information, the same thing with my "web" package containing a ViteJs app works perfectly. It seems that Nest does not transpile external dependencies, but Vite does

## Steps to reproduce
- For the error :
```sh
pnpm dev
```

- For the working code (but not what I want) :

```
git reset HEAD~2
pnpm dev
```