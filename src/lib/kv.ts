import { createClient } from "redis";

export const kv = createClient();

kv.on("error", (err) => console.log("Redis Client Error", err));

await kv.connect();
