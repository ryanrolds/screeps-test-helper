import {setup} from './environment'

export const mochaHooks = {
  beforeAll() {
    setup(global)
  }
};