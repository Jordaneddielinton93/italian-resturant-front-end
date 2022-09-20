import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgres://qzbjjbtc:JTqhNEQwyXsmIbSypS9xGQNwCghQJucb@tyke.db.elephantsql.com/qzbjjbtc",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default function query(text, params) {
  console.log("not working after here");
  return pool.query(text, params);
}
