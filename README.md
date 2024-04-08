# Fork Me React.js component

[![test](https://github.com/react18-tools/fork-me/actions/workflows/test.yml/badge.svg)](https://github.com/react18-tools/fork-me/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/b2526ab45866fe864beb/maintainability)](https://codeclimate.com/github/react18-tools/fork-me/maintainability) [![codecov](https://codecov.io/gh/react18-tools/fork-me/graph/badge.svg)](https://codecov.io/gh/react18-tools/fork-me) [![Version](https://img.shields.io/npm/v/@mayank1513/fork-me.svg?colorB=green)](https://www.npmjs.com/package/@mayank1513/fork-me) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/d18m/@mayank1513/fork-me.svg)](https://www.npmjs.com/package/@mayank1513/fork-me) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mayank1513/fork-me) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

> A simple fork me component for React.js projects!

> We are happy to announce that we have launched a new course to help you understand the [turborepo-template](https://github.com/react18-tools/turborepo-template) better [Craft Next Gen UI Libraries for React 18 and Next.js 14](https://www.udemy.com/course/craft-next-gen-ui-libraries-for-react-18-and-nextjs-14/?referralCode=46B8C7845ECCEA99E0EF)

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

## Add on your page

```ts
<ForkMe gitHubUrl="https://github.com/mayank1513/turborepo-template" />
// and
<StarMe gitHubUrl="https://github.com/mayank1513/turborepo-template" />
```

You need to import styles for ForkMe component

```ts
import "@mayank1513/fork-me/server/index.css";
```

## Optional parameters

```ts
	text?: string; // replace the Fork me on GitHub text
	width?: string | number; // if you need to adjust the width of the ribbon (length)
	height?: string | number; // to adjust height of the ribbon
	bgColor?: string; // background color
	textColor?: string; // text color
```

### 🤩 Don't forger to star [this repo](https://github.com/react18-tools/fork-me)!

Want hands-on course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://mayank-chaudhari.vercel.app/courses/react-and-next-js-with-typescript) and [The Game of Chess with Next.js, React and TypeScrypt](https://www.udemy.com/course/game-of-chess-with-nextjs-react-and-typescrypt/?referralCode=851A28F10B254A8523FE)

![Repo Stats](https://repobeats.axiom.co/api/embed/e055f5cf540a01da558a64a02a943f4ad05d0985.svg "Repobeats analytics image")

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
