
# Rubrik Design System Components

This is the code repository for the Rubrik Design System Components.  
It is configured as a monorepo (using Lerna and Yarn) to package individual sets of components, to allow for a mix-n-match approach to their use.




# Development

This repo is configured to work with Lerna and Yarn (v1.x) using Yarn Workspaces.

To configure for local developent pull this repo and `cd` into the project root, then:

```shell
$ lerna bootstrap
```

## Storybook

Storybook is used as a visual development and testing environment. All packages within this monorepo are aggregated into a single Storybook instance. To start:

```shell
$ yarn storybook
```
Then visit `http://localhost:6006`.

---

## Building Packages

Use **Lerna** to build packages, e.g.:

```shell
$ lerna run --scope @rubrik/media build
```