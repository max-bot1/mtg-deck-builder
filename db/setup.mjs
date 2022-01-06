import sqlite3 from "sqlite3";
import { open } from "sqlite";

(async () => {
  const db = await open({
    filename: `./db/sqlite.db`,
    driver: sqlite3.Database,
  });

  db.run(
    `CREATE TABLE deck (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            deck_name VARCHAR,
            card_ids VARCHAR,
            user_id VARCHAR
            )`,
    (err) => {
      if (err) {
        console.log(err.message);
      }
    }
  );
})();
