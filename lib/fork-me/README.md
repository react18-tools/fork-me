# ForkMe

[![test](https://github.com/react18-tools/fork-me/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/fork-me/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/aa896ec14c570f3bb274/maintainability)](https://codeclimate.com/github/react18-tools/fork-me/maintainability) [![codecov](https://codecov.io/gh/react18-tools/fork-me/graph/badge.svg)](https://codecov.io/gh/react18-tools/fork-me) [![Version](https://img.shields.io/npm/v/@mayank1513/fork-me.svg?colorB=green)](https://www.npmjs.com/package/@mayank1513/fork-me) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/@mayank1513/fork-me.svg)](https://www.npmjs.com/package/@mayank1513/fork-me) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mayank1513/fork-me) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

> [Featured packages built with this template.](./FEATURED.md)

> We are happy to announce that we have launched a new course to help you understand this template better [Craft Next Gen UI Libraries for React 18 and Next.js 14](https://www.udemy.com/course/craft-next-gen-ui-libraries-for-react-18-and-nextjs-14/?referralCode=46B8C7845ECCEA99E0EF)

## Features

✅ Fully Treeshakable (import from @mayank1513/fork-me/client/component)

✅ Full TypeScript Support

✅ Unleash the full power of React18 Server components

✅ Works with all build systems/tools/frameworks for React18

✅ Doccumented with [Typedoc](https://react18-tools.github.io/fork-me) ([Docs](https://react18-tools.github.io/fork-me))

## Install

```bash
$ pnpm add @mayank1513/fork-me
```

or

```bash
$ npm install @mayank1513/fork-me
```

or

```bash
$ yarn add @mayank1513/fork-me
```

## Getting started:

Click on the `"Use this template"` button to customize it for your next JavaScript/TypeScript/React/Vue/Next.js library or project.

## What's Different?

Compared to the default scaffold from create-turbo, this template offers:

- Unit tests with `vitest`
- Build setup with `tsup` and `esbuild-react18-useclient` Supports React Server components out of the box
- **Automatic file generation**
  - just run `yarn turbo gen` and follow the prompts to auto generate your new component with test file and dependency linking
  - follow best practices automatically
- GitHub actions/workflows to auto publish your package when version changes
- GitHub action/workflow + preinstall scripts to automatically rebrand your repo on creation

## Step by Step Instructions and Checklist

- [ ] run `node scope.js` from the root directory if you want to publish scoped pacckage.
  - [ ] We assumed that your npm user name is same as your GitHub account or organization username.
  - [ ] Please make sure `owner` is set to your <npmjs.com> username before running the above command.
- [ ] Set up `CodeCov`
  - [ ] Visit codecov and setup your repo
  - [ ] Create [repository secret](https://github.com/react18-tools/@mayank1513/fork-me/settings/secrets/actions) for `CODECOV_TOKEN`
- [ ] Set up `CodeClimate`
  - [ ] Visit CodeClimate and setup your repo
  - [ ] Create [repository secret](https://github.com/react18-tools/@mayank1513/fork-me/settings/secrets/actions) for `CC_TEST_REPORTER_ID`
  - [ ] add `*.test.*` to ignore patterns on the website
  - [ ] update code climate badge
- [ ] Add `NPM_AUTH_TOKEN` to repository secrets to automate publishing package
  - [ ] login to your [`npm` account](https://www.npmjs.com/login) and create automation token
  - [ ] Create a new repository secrets `NPM_AUTH_TOKEN`
- [ ] Update description in `lib/@mayank1513/fork-me/package.json`
- [ ] Update Repo Stats by visiting and setting up [repobeats](https://repobeats.axiom.co/)
- [ ] Create your library and update examples
- [ ] Update README
- [ ] Setup GitHub pages to deploy docs
  - [ ] Go to [repo settings](https://github.com/react18-tools/@mayank1513/fork-me/settings/pages) -> pages (On left panel); Select deploy from a branch; Then Select `main` and `/docs`
- [ ] (Optional) Set up [Deepsource](https://app.deepsource.com/login) for static code analysis
- [ ] Push your changes/Create PR and see your library being automatically tested and published
- [ ] Optionally deploy your example(s) to Vercel.
- [ ] Update sponsorship urls.
- [ ] You are most welcome to star this template, contribute, and/or sponsor the `terborepo-template` project or my other open-source work
- [ ] You can also fork the [`terborepo-template`](https://github.com/react18-tools/turbo-repo-template/fork) and add your package to `packages/shared-ui/src/examples/featured.json`
  - [ ] If approved your package will be automatically added to FEATURED.md and also published on the home page of this repo.

## What's inside?

### Utilities

This Turborepo template includes pre-configured tools:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- Plop based code generator for scaffolding new components
- Automatically rebrand this template to match your repo name

### Apps and Packages

This Turborepo includes the following packages/examples/lib:

- `nextjs`: a [Next.js](https://nextjs.org/) app
- `vite`: a [Vite.js](https://vitest.dev) app
- `@mayank1513/fork-me`: a React component library shared by both `Next.js` and `Vite` examples
- `eslint-config-custom`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/example is 100% [TypeScript](https://www.typescriptlang.org/).

### Build

To build all apps and packages, run the following command:

```
cd @mayank1513/fork-me
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd @mayank1513/fork-me
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

### 🤩 Don't forger to star [this repo](https://github.com/react18-tools/@mayank1513/fork-me)!

Want hands-on course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://mayank-chaudhari.vercel.app/courses/react-and-next-js-with-typescript) and [The Game of Chess with Next.js, React and TypeScrypt](https://www.udemy.com/course/game-of-chess-with-nextjs-react-and-typescrypt/?referralCode=851A28F10B254A8523FE)

![Repo Stats](https://repobeats.axiom.co/api/embed/2ef1a24385037998386148afe5a98ded6006f410.svg "Repobeats analytics image")

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
