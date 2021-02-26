/// <reference types="screeps" />
/**
 * Generic type for partial implementations of interfaces.
 */
declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<string> ? Array<string> : T[P] extends Array<number> ? Array<number> : T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends Id<infer V> ? Id<V> : T[P] extends (object | undefined) ? DeepPartial<T[P]> : T[P];
} & {
    [key: string]: any;
};
/**
 * Conditional type for all concrete implementations of Structure.
 * Unlike Structure<T>, ConcreteStructure<T> gives you the actual concrete class that extends Structure<T>.
 */
declare type ConcreteStructure<T extends StructureConstant> = T extends STRUCTURE_EXTENSION ? StructureExtension : T extends STRUCTURE_RAMPART ? StructureRampart : T extends STRUCTURE_ROAD ? StructureRoad : T extends STRUCTURE_SPAWN ? StructureSpawn : T extends STRUCTURE_LINK ? StructureLink : T extends STRUCTURE_WALL ? StructureWall : T extends STRUCTURE_STORAGE ? StructureStorage : T extends STRUCTURE_TOWER ? StructureTower : T extends STRUCTURE_OBSERVER ? StructureObserver : T extends STRUCTURE_POWER_SPAWN ? StructurePowerSpawn : T extends STRUCTURE_EXTRACTOR ? StructureExtractor : T extends STRUCTURE_LAB ? StructureLab : T extends STRUCTURE_TERMINAL ? StructureTerminal : T extends STRUCTURE_CONTAINER ? StructureContainer : T extends STRUCTURE_NUKER ? StructureNuker : T extends STRUCTURE_FACTORY ? StructureFactory : T extends STRUCTURE_KEEPER_LAIR ? StructureKeeperLair : T extends STRUCTURE_CONTROLLER ? StructureController : T extends STRUCTURE_POWER_BANK ? StructurePowerBank : T extends STRUCTURE_PORTAL ? StructurePortal : T extends STRUCTURE_INVADER_CORE ? StructureInvaderCore : never;
/**
 * Properties I've seen having been accessed internally by Jest's matchers and message formatters (there may be others).
 */
/**
 * Mocks a global object instance, like Game or Memory.
 *
 * @param name - the name of the global
 * @param mockedProps - the properties you need to mock for your test
 * @param allowUndefinedAccess - if false, accessing a property not present in mockProps, will throw an exception
 */
declare function mockGlobal<T extends object>(name: string, mockedProps?: DeepPartial<T>, allowUndefinedAccess?: boolean): void;
/**
 * Creates a mock instance of a class/interface.
 *
 * @param mockedProps - the properties you need to mock for your test
 * @param allowUndefinedAccess - if false, accessing a property not present in mockProps, will throw an exception
 */
declare function mockInstanceOf<T extends object>(mockedProps?: DeepPartial<T>, allowUndefinedAccess?: boolean): T;
/**
 * Creates a mock instance of a structure, with a unique ID, structure type and toJSON.
 * The unique IDs allow Jest's matcher (deep equality) to tell them apart.
 *
 * @param structureType
 * @param mockedProps - the additional properties you need to mock for your test
 */
declare function mockStructure<T extends StructureConstant>(structureType: T, mockedProps?: DeepPartial<ConcreteStructure<T>>): ConcreteStructure<T>;
/**
 * Call this once before running tests that create new instances of RoomPosition.
 */
declare function mockRoomPositionConstructor(globalObject: any): void;
export { mockGlobal, mockRoomPositionConstructor, mockInstanceOf, mockStructure };
