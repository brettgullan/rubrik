
# Rubrik Design System Components

This is the code repository for the Rubrik Design System Components.  
It is configured as a monorepo (using Lerna and Yarn) to package individual sets of components, to allow for a mix-n-match approach to their use.




# DEVELOPMENT

This repo is configured to work with Lerna and Yarn (v1.x) using Yarn Workspaces.

To configure for local developent pull this repo and `cd` into the project root, then:

```shell
$ yarn install
```



## Using Lerna with NPM

* Remove `npmClient` and `useWorkspaces` fields from lerna.json.
* Run `lerna clean` and `lerna bootstrap`.

This is sufficient to get a basic lerna monorepo up and running, in order to build the component libraries.  
For example:  

```shell
$ lerna run --scope @rubrik/media build
```

However, there are known limitations running Gatsby within this environment.  
Thus, the dev environment for `./package/docs` doesn't work correctly.


## Using Yarn v2

There are known issues with Yarn v2. Don't do it for now.