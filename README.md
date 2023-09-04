# business-card-component library Docs

The Business Card component to be used into the Smartforce Apps developed by The SmartForce Team.

## Scripts

- Run `npm install` into both `root` and `example-app` folders to install project dependecies.

- `npm run build`

  - Build the business-card-component library with rollup bundler for production environment.

- `npm run serve`

  - Build the business-card-component library for development environment.
  - Create a global link for the business-card-component library.
  - Link react peer dependency from the example-app folder.
  - Serve example-app using the Business Card component from the library.

## Project Structure

**`/src` The source code for the Business Card component**

- This library was developed using React, Typescript and Sass with CSS-Modules

  - Take a look at the `package.json` and the `tsconfig.json` files.

- For building the library we use rollup bundler

  - Take a look at the `rollup.config.js` file.

**`/example-app` The app built to manually check that the business-card-component library works**

- This is a WebApp develop with React and Typescript to verify that the business-card-component library is working as expected

  - Take a look at the `package.json` and the `tsconfig.json` files inside the `/example-app` folder.

- For bulding WebApps we prefere use Webpack bundler

  - Take a look at the `webpack.config.js` file.

**`/dist` Folder were the built library will be placed**

## Research

- Building the business-card-component library

1. run `npm install` command to install dependencies.
2. run `npm run rollup` command to build the business-card-component library into the `/dist` folder.
3. run `npm link` command to simply link a local package to another local package to enable you to use it as if you installed it from the registry.[npm link docs](https://docs.npmjs.com/cli/v9/commands/npm-link).

- Building the example-app

1. run `npm install` command to install dependencies.
2. run `npm link business-card-component` command to link the local business-card-component library.
   Note: before running the app you should link react peer dependency in the library component from the example-app.
   [React Docs](https://reactjs.org/warnings/invalid-hook-call-warning.html).
   run `npm link example-app/node_modules/react` from root folder.
3. run `npm run serve` to put alive the example-app WebApp.

## Rollup plugins

- Resolve node_modules dependencies

  - [@rollup/plugin-node-resolve](https://www.npmjs.com/package/@rollup/plugin-node-resolve)

- Convert CommonJS to ES2015 before Rollup process

  - [@rollup/plugin-commonjs](https://www.npmjs.com/package/@rollup/plugin-commonjs)

- Tool for replace NODE_ENV variables into the app

  - [@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace)

- Transpile typescript

  - [@rollup/plugin-typescript](https://www.npmjs.com/package/@rollup/plugin-typescript)

- Build types declaration files .d.ts

  - [rollup-plugin-dts](https://www.npmjs.com/package/rollup-plugin-dts)
  - [rollup-plugin-dts - GitHub](https://github.com/wessberg/rollup-plugin-ts)

- Resolve css,css-modules and sass files

  - [rollup-plugin-styles](https://www.npmjs.com/package/rollup-plugin-styles)
  - [rollup-plugin-styles - Blog](https://anidetrix.github.io/rollup-plugin-styles/)
  - [autoprefixer](https://www.npmjs.com/package/autoprefixer)

- Peer dependencies are not included into the bundle

  - [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external)

- Minify the output bundle and reduce the overall file size

  - [rollup-plugin-terser](https://www.npmjs.com/package/rollup-plugin-terser)

## More information

1. [How to create a react component library](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
2. [Understanding modern web stack](https://dev.to/alexeagleson/understanding-the-modern-web-stack-running-a-local-web-server-4d8g)
3. [Understanding modern web stack with react and typescript](https://dev.to/alexeagleson/understanding-the-modern-web-stack-webpack-devserver-react-typescript-4b9b)
4. [Publishing a react component library to npm](https://blog.logrocket.com/the-complete-guide-to-publishing-a-react-package-to-npm/)
5. [Rollup plugins list](https://github.com/rollup/awesome)
6. [How to Bundle JavaScript With Rollup - Tutorial](https://www.learnwithjason.dev/blog/learn-rollup-js)
