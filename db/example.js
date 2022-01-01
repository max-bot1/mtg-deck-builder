var sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(`${__dirname}/sqlite.db`, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE deck (
            deck_id INTEGER PRIMARY KEY AUTOINCREMENT,
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
  }
  db.all("SELECT * FROM deck", (err, rows) => {
    if (err) {
      console.log(err.message);
    }
    console.log(rows);
  });
});

module.exports = db;
