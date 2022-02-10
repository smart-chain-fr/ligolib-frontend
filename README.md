# SmartChain MERN Ligolib

This repository is intended to be a ligolib for every project at [Smart-Chain](https://smart-chain.fr/) and will evolve based on your inputs and recomendations. It features a simple reddit-like platform where you can register and post comments. You can also upload images to IPFS as part of the comments.

The project is set up as a monorepo that contains both the frontend and the backend. As a result, Typescript definitions for objects generated in the back can be used for type checking in the front, and reversely.

MERN stands for Mongo-Express-React-Node. It is a full stack that can run any project's frontend and backend.

We use Koa instead of Express. Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling.

We use JWT for authentification. You can remove the auth module or any other part of the ligolib to fit your needs accordingly.

## Demo: https://mern-ligolib.pages.dev/

## Getting started

1- Rename `.env.example` to `.env` in `/src/api/.env.example` and `/src/frontend/.env.example`. No `.env` files is comited to git for security reasons. Setup your env variables or leave the provided ones as an example.

2- Install modules

```
yarn install
```

The monorepo uses `lerna` to manage dependencies from parents folders to children folders in the monorepo. A package in parent folder `/package.json` will automatically be installed in children folders `/src/api/node_modules` and `/src/frontend/node_modules`. Packages in children folders `/src/api/package.json` and `/src/frontend/package.json` are specific to these folders. Typically Typescript and testing librairies are in the parent folder as they are used by both the frontend and backend.

3- Start de server :

```
cd src/api
yarn start
```

4- Start de frontend :

```
cd src/frontend
yarn start
```

5- Open https://localhost:3000 to access the frontend. You will be able to create a new account and post comments as part of the demo.

## File Structure

### Backend

TBD

### Frontend

TBD

## Testing

TBD

## Linter / Prettier / Typescript config / VSCode config

It is important in a collaborative project to align on the formatting of the code and have a config setup that automatically shapes and highlights the code in common maner.

TBD
