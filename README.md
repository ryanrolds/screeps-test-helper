# Screeps Test Helper

> Fork of https://github.com/eduter/screeps-jest that has been updated to be test framework agnostic. **All credit should go to Eduter.**

Helper functions for unit testing your Screeps AI.

Features:

* All game constants and lodash automatically available in the global scope, when running unit tests
* Functions for mocking instances of game objects and globals
* Constructor of `RoomPosition` already mocked
* If you're using TypeScript (why wouldn't you?), mocks have fully inferred types and your IDE should autocomplete property names while creating your mocks

## How to install it?

```
npm install screeps-test-helper --save-dev
```

Before any of your tests run you will need to call the `setup(global)` function.

### Jest

There is a Jest Environment provided.

### Mocha

Mocha will require creating a file that calls the setup function that is loading using `--require` when using the CLI or referenced in the `.mocharc.*` file.

Example `./src/test_globals.ts` for Mocha:
```
import {setup} from 'screeps-test-helper';
setup(global);
```

The file can be referenced by the `.mocharc.json` file like so:
```
{
  "extension": [
    "ts"
  ],
  "spec": "./src/**/*.test.ts",
  "require": [
    "ts-node/register",
    "./src/test_globals.ts"
  ]
}
```

## How to use it?
```typescript
import { mockGlobal, mockInstanceOf, mockStructure } from "screeps-test-helper";

mockGlobal<Game>('Game', {
  time: 123
});

const creep = mockInstanceOf<Creep>({
  moveTo: () => OK,
  store: {
    getFreeCapacity: () => 0
  },
  transfer: () => ERR_NOT_IN_RANGE
});

const spawn = mockStructure(STRUCTURE_SPAWN, {
  hits: 5000,
  hitsMax: 5000
});
```