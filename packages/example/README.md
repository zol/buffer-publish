# @bufferapp/example

An example UI package that implements a [container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), [reducer](http://redux.js.org/docs/basics/Reducers.html) and [middleware](http://redux.js.org/docs/advanced/Middleware.html).

*NOTE:* This package should can be used as a template for new packages.

- [Quick Start](#quick-start)
- [Package Anatomy](#component-anatomy)

## Quick Start

### Start Storybook

If you're interested in working on or observing _how things look_, starting with [React Storybook](https://storybook.js.org/) is a great way to get going. It's setup to automatically reload as the code changes to make it easy to do rapid iteration on components.


```sh
npm start
```

After that copy and paste the host and port that is displayed on the console into a browser.

#### Developing Multiple Packages In Parallel

If you're running this for multiple packages at the same time, it's helpful to pass in the port number.

```sh
npm start -- --port 8003
```

### Run Tests

Tests are run using [Jest](https://facebook.github.io/jest/) and UIs are tested and locked down using [Jest Snapshots](https://facebook.github.io/jest/docs/snapshot-testing.html) and [React Storybook](https://storybook.js.org/).

#### Standard Tests

Runs linter, then unit and snapshot tests. These tests are run using CI and are currently running on TravisCI:

https://travis-ci.com/bufferapp/buffer-publish

```bash
npm test
```

#### Watch Mode

When writing unit tests for things like middleware and the main index file, it's useful to only run the test that change so you can rapidly iterate. Jest watch mode allows you do do this with a single command:

```sh
npm run test-watch
```

## Package Anatomy
