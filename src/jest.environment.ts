import NodeEnvironment from "jest-environment-node";
import {setup} from './environment'

export default class JestEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();
    setup(this.global);
  }
}