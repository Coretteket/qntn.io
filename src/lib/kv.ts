import { createClient } from "redis";

export const kv = createClient({ url: "redis://redis:6379" });

kv.on("error", (err) => console.log("Redis Client Error", err));

await kv.connect();
