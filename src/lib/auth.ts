import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
const debUrl = process.env.MONGODB_URL;
if (!debUrl) {
  throw new Error("mongodb url is not responding");
}
const client = new MongoClient(debUrl);
const db = client.db("bazardor");

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
