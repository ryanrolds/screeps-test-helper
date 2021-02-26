export { };

declare global {
  namespace NodeJS {
    interface Global {
      RoomPosition: RoomPosition;
    }
  }
}
