import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function get(req, res) {
  const db = await open({
    filename: `./db/sqlite.db`,
    driver: sqlite3.Database,
  });

  let deck = await db.get(`SELECT * FROM deck where id = ${req.query.id}`);
  res.json(deck);
}
