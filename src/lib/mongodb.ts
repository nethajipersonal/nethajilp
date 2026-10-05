import { MongoClient } from "mongodb";

const globalForMongo = globalThis as unknown as {
  mongoClientPromise: Promise<MongoClient> | undefined;
};

function createClientPromise(): Promise<MongoClient> | undefined {
  if (!process.env.MONGODB_URI) return undefined;
  return new MongoClient(process.env.MONGODB_URI).connect();
}

export function getMongoClientPromise(): Promise<MongoClient> | undefined {
  if (!globalForMongo.mongoClientPromise) {
    globalForMongo.mongoClientPromise = createClientPromise();
  }
  return globalForMongo.mongoClientPromise;
}

export async function getBlogDb() {
  const clientPromise = getMongoClientPromise();
  if (!clientPromise) return null;
  const client = await clientPromise;
  // The connection string has no database path segment, so name it explicitly.
  return client.db("portfolio");
}
