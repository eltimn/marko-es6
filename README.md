This is an example Marko app that uses ES6 Modules. There is both a working Webpack+Babel build and Rollup+Buble build. The Webpack one is recommended as Rollup does not support recursive components.

This also demostrates bootstrapping Marko from a static HTML file that is not served by Express. The bundler exports a global object named "app" that is then used in the HTML file to initialize it by calling `window.app.init`.

## Clone and Install

```bash
git clone https://github.com/eltimn/marko-es6.git
cd marko-es6
npm install
```

## Run the Webpack Build

```bash
npm start
```

## Run the Rollup Build

```bash
npm run start:rollup
```

Note that this will cause a compilation error:

> Error: A module cannot import itself

This is because Rollup does not support self importation. In other words, recursive components won't work. Remove the `<tree>` tag from the home component and it should work.


### Notes

I created this repo to debug a problem I was having in getting a working ES6 build with Webpack, which I had failed to do a few months ago as well. We have been using Rollup+Buble for a several months without any problems, but then found out Rollup does not support recursive components and needed to switch.

If you just add the babel-loader to the example marko-webpack app it will not work. At least not with Babel 6+. I don't fully understand it as I've haven't used CommonJS modules much, but prior to v6 Babel allowed invalid require statements, which they corrected. This caused problems for people that were doing the invalid require statements, but shouldn't affect anyone using ES6 style imports. The full details about that are in this [blog post](https://blog.kentcdodds.com/misunderstanding-es6-modules-upgrading-babel-tears-and-a-solution-ad2d5ab93ce0).

Since that shouldn't affect ES6 style imports, I still don't understand why it doesn't work directly with Babel. You need to include a plugin that was created to revert Babel output to what it was in v5: [babel-plugin-add-module-exports](https://github.com/59naga/babel-plugin-add-module-exports).
