const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("phoenix.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS rooms (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price TEXT,
      desc TEXT
    )
  `);

   db.run(`
    CREATE TABLE IF NOT EXISTS games (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      genre TEXT,
      image TEXT
    )
  `);

    db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      phone TEXT,
      room_id INTEGER,
      date TEXT,
      start TEXT,
      duration INTEGER
    )
  `);
});

module.exports = db;