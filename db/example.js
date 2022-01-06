import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default (async () => {
  return await open({
    filename: `./db/sqlite.db`,
    driver: sqlite3.Database,
  });
})();
