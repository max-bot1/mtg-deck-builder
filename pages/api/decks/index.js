import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default async function post(req, res) {
  const db = await open({
    filename: `./db/sqlite.db`,
    driver: sqlite3.Database,
  });
  let data = {
    deck_name: req.body.deck_name,
    card_ids: req.body.card_ids,
    user_id: req.body.user_id,
  };
  let sql = "INSERT INTO deck (deck_name, card_ids, user_id) VALUES (?,?,?)";
  let params = [data.deck_name, data.card_ids, data.user_id];

  let confirm = await db.run(sql, params);
  let deck = await db.get(`SELECT * FROM deck WHERE id = ${confirm.lastID}`);
  res.json(deck);
}
