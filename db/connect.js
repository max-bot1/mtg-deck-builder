const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(
  "./db/sample.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the chinook database.");
  }
);

// db.run(
//   `INSERT INTO deck(deck_name, card_id) VALUES(?, ?)`,
//   ["Gishath, Sun's Avatar", [1, 2, 3, 4]],
//   function (err) {
//     if (err) {
//       return console.log(err.message);
//     }

//     // get the last insert id
//     console.log(`A row has been inserted with rowid ${this.lastID}`);
//   }
// );

db.all(`SELECT card_id FROM deck`, (err, row) => {
  if (err) {
    return console.error(err.message);
  }
  return row
    ? console.log(row, row.card_id)
    : console.log(`No playlist found with the id ${playlistId}`);
});

const cardId = () => {
  row.cardId;
};

// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
});
