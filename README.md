# react-clear-cache

> A component to manage application updates.

[![NPM](https://img.shields.io/npm/v/@herowcode/react-clear-cache.svg)](ttps://www.npmjs.com/package/@herowcode/react-clear-cache) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

- Fetched on window focus
- Stop fetching on window blur

## Demo

See [demo](https://noahjohn9259.github.io/react-clear-cache/)

## Install

NPM

```bash
$ npm install --save @herowcode/react-clear-cache
```

Yarn

```bash
$ yarn add @herowcode/react-clear-cache
```

## Add script in package.json

This will generate `meta.json` file. This will have the version key with the latest build.

```json
{
  "prebuild": "npm run generate-build-meta",
  "generate-build-meta": "./node_modules/@herowcode/react-clear-cache/bin/cli.js"
}
```

You can pass the `destination` param to the generate-build-meta to choose the output folder

## Usage

### Using `Context API`:

```tsx
import React from 'react';

import {
  ClearCacheProvider,
  useClearCacheCtx,
} from '@herowcode/react-clear-cache';

function App() {
  const { isLatestVersion, emptyCacheStorage } = useClearCacheCtx();

  return (
    <div>
      {!isLatestVersion && (
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              emptyCacheStorage();
            }}
          >
            Update version
          </a>
        </p>
      )}
    </div>
  );
}

ReactDOM.render(
  <ClearCacheProvider duration={5000}>
    <App />
  </ClearCacheProvider>,
  document.getElementById('root')
);
```

### Using `render props`:

```tsx
import React from 'react';

import ClearCache from '@herowcode/react-clear-cache';

function App() {
  return (
    <div>
      <ClearCache>
        {({ isLatestVersion, emptyCacheStorage }) => (
          <div>
            {!isLatestVersion && (
              <p>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    emptyCacheStorage();
                  }}
                >
                  Update version
                </a>
              </p>
            )}
          </div>
        )}
      </ClearCache>
    </div>
  );
}

export default App;
```

### Using `hooks`:

```tsx
import React from 'react';

import { useClearCache } from '@herowcode/react-clear-cache';

function App() {
  const { isLatestVersion, emptyCacheStorage } = useClearCache();

  return (
    <div>
      {!isLatestVersion && (
        <p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              emptyCacheStorage();
            }}
          >
            Update version
          </a>
        </p>
      )}
    </div>
  );
}

export default App;
```

## Props

### `duration`: number

You can set the duration (in ms) when to fetch for new updates.

### `auto`: boolean

Set to true to auto-reload the page whenever an update is available.

## Render props

### `loading`: boolean

A boolean that indicates whether the request is in flight

### `isLatestVersion`: boolean

A boolean that indicates if the user has the latest version.

### `emptyCacheStorage`: () => void

This function empty the CacheStorage and reloads the page.

## Contributors

1. Created by: [noahjohn9259](https://github.com/noahjohn9259)
2. Adapted by: [judsonjuniorr](https://github.com/judsonjuniorr)

## License

MIT © [noahjohn9259](https://github.com/noahjohn9259)

## Development

1. In package.json, set `main` to `src/index.js`.

2. Run `npm start` in root directory. It will build and watch if there are changes made.

3. `cd example` and run `npm start`. It will run the demo application.

## Note

If you are done making changes, reset `main` to `dist/index.js` in package.json.
