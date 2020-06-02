# Contributing

Want to contribute? Great! Check the guidelines below.

## Tech

- [node.js](http://nodejs.org) - evented I/O for the backend
- [Typescript](https://www.typescriptlang.org/) - a strict syntactical superset of JavaScript, and adds optional static typing to the language
- [Jest](https://jestjs.io/) - a testing framework
- [RamdaJS](https://ramdajs.com/) - a library designed specifically for a functional programming style, one that makes it easy to create functional pipelines, one that never mutates user data
- [ESLint](https://eslint.org/): a fully pluggable tool for identifying and reporting on patterns in JavaScript
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

Run eslint on all ts files:

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

## Pull Request Guidelines

**Before submitting a pull request,** please make sure the following is done:

1. Fork [the repository](https://github.com/pgmanutd/data-structures-and-algorithms.git) and create your branch from `master`.
2. Run `npm install` in the repository root.
3. If you've fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (`npm test`). Tip: `npm run test:watch TestName` is helpful in development.
5. Format your code with [prettier](https://prettier.io/) (`npm run format`).
6. Make sure your code lints (`npm run lint`).
7. Run the [Typescript](https://www.typescriptlang.org/) typechecking (`npm run typecheck`).
8. Follow [commit convention](./COMMIT_CONVENTION.md).

When you are done with your changes:

```bash
git branch -b "YOUR_BRANCH_NAME"

git add --all

git commit -a -m "commit message"

git push -u origin "YOUR_BRANCH_NAME"
```

and create a pull request from github
