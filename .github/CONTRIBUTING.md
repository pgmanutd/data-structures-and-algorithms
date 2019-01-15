# Contributing

Want to contribute? Great! Check the guidelines below.

## Tech

- [node.js](http://nodejs.org) - evented I/O for the backend
- [Typescript](https://www.typescriptlang.org/) - a strict syntactical superset of JavaScript, and adds optional static typing to the language
- [Jest](https://jestjs.io/) - a testing framework
- [RamdaJS](https://ramdajs.com/) - a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data
- [Tslint](https://palantir.github.io/tslint/): an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors
- [Prettier](https://prettier.io/): an opinionated code formatter

## Development

Checkout [the repository](https://github.com/pgmanutd/data-structures-and-algorithms.git)

Open your favorite Terminal and run these commands:

```bash
cd data-structures-and-algorithms

npm install

npm run test:coverage
```

## Important commands:

Run tslint on all ts files:

```bash
$ npm run lint
```

Run typescript typechecking:

```bash
$ npm run typecheck
```

Run unit tests:

```bash
$ npm test
```

Run unit tests in watch mode:

```bash
$ npm run test:watch
```

Run unit tests with coverage:

```bash
$ npm run test:coverage
```

Run lint, typechecking and tests:

```bash
$ npm run check
```

Run prettier formatting:

```bash
$ npm run format
```

##### Please follow few guidelines before raising a PR

- Please check pull request guidelines [here](./PULL_REQUEST_TEMPLATE.md)
