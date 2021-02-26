import NodeEnvironment from "jest-environment-node";
import setupGlobals from "./setupGlobals";
import {mockRoomPositionConstructor} from "./mocking";

export const setup = (global: any) => {
  setupGlobals(global);
  mockRoomPositionConstructor(global);
}