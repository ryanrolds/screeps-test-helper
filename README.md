# Screeps-Jest

> Fork of https://github.com/eduter/screeps-jest that has been updated to be test framework agnostic. **All credit should go to Eduter.**

Environment and helper functions for unit testing your Screeps AI.

Features:

* All game constants and lodash automatically available in the global scope, when running unit tests
* Functions for mocking instances of game objects and globals
* Constructor of `RoomPosition` already mocked
* If you're using TypeScript (why wouldn't you?), mocks have fully inferred types and your IDE should autocomplete property names while creating your mocks

## How to install it?

```
npm install ryanrolds/screeps-test-helper --save-dev
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