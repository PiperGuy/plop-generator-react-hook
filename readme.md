# 💧 plop generator react hook

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![github actions][github-actions-badge]][github-actions]
[![coverage][codecov-badge]][codecov]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]
[![contributors][contributors-badge]][contributors]

_A [`plop`][plop] generator for [`react`][react] hooks._

## 📦 Installation

This package is hosted on [`npm`][npm].

```bash
npm install --save-dev @piperguy/plop-generator-react-hook
```

## 🥑 Usage

First, be sure you have [`plop`][plop] installed. Then, add the following line to your `plopfile.js`.

```javascript
plop.load("@piperguy/plop-generator-react-hook")
```

Now you'll have access to the `hook` generator as shown below.

```bash
plop hook
```

The `hook` generator scaffolds a hook, including tests, and adds it to the `index.ts` file for easy importing. The resulting directory looks like this for a hook named `useHook`.

```text
src
└── hooks
   ├── index.ts
   └── useHook
      ├── index.ts
      ├── useHook.tsx
      └── useHook.test.tsx
```

## ❔ Questions

🐛 report bugs by filing [issues][issues]  
📢 provide feedback with [issues][issues] or on [twitter][twitter]  
🙋🏼‍♂️ use my [ama][ama] or [twitter][twitter] to ask any other questions

[codecov]: https://app.codecov.io/gh/piperguy/plop-generator-react-hook
[contributing]: https://github.com/piperguy/plop-generator-react-hook/blob/master/contributing.md
[contributors]: #-contributors
[npm]: https://www.npmjs.com/package/@piperguy/plop-generator-react-hook
[codecov-badge]: https://img.shields.io/codecov/c/github/piperguy/plop-generator-react-hook?style=flat-square
[version-badge]: https://img.shields.io/npm/v/@piperguy/plop-generator-react-hook.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@piperguy/plop-generator-react-hook?style=flat-square
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[contributors-badge]: https://img.shields.io/github/all-contributors/piperguy/plop-generator-react-hook?style=flat-square
[issues]: https://github.com/piperguy/plop-generator-react-hook/issues
[twitter]: https://twitter.com/_PiperGuy_
[bundlephobia]: https://bundlephobia.com/result?p=@piperguy/plop-generator-react-hook
[size-badge]: https://img.shields.io/bundlephobia/minzip/@piperguy/plop-generator-react-hook?style=flat-square
[github-actions]: https://github.com/piperguy/plop-generator-react-hook/actions
[github-actions-badge]: https://img.shields.io/github/workflow/status/piperguy/plop-generator-react-hook/%F0%9F%9A%80%20release?style=flat-square
[typescript]: https://www.typescriptlang.org/dt/search?search=%piperguy%2Fplop-generator-react-hook
[typescript-badge]: https://img.shields.io/npm/types/@piperguy/plop-generator-react-hook?style=flat-square
[plop]: https://plopjs.com
[react]: https://reactjs.org
