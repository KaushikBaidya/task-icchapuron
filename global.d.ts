// global.d.ts

import { MongoClient } from "mongodb";

// Extend the global object with _mongoClientPromise
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};
