import {setup} from './environment'

const MochaEnvironment = {
  beforeAll() {
    setup(global)
  }
};

export default MochaEnvironment;