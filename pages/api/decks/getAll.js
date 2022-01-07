import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function get(req, res) {
  const db = await open({
    filename: `./db/sqlite.db`,
    driver: sqlite3.Database,
  });

  const deck = await db.all(`SELECT * FROM deck`);
  res.json(deck);
}
