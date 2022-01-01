const db = require("/db/example.js");
// let bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

export default function getDeck(req, res) {
  let sql = "select * from deck";
  let params = [];
  if (req.method === "GET") {
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: rows,
      });
    });
  } else if (req.method === "POST") {
    let data = {
      deck_name: req.body.deck_name,
      card_ids: req.body.card_ids,
      user_id: req.body.user_id,
    };
    let sql = "INSERT INTO deck (deck_name, card_ids, user_id) VALUES (?,?,?)";
    let params = [data.deck_name, data.card_ids, data.user_id];
    db.run(sql, params, function (err, result) {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: "success",
        data: data,
        id: this.lastID,
      });
    });
  }
}
