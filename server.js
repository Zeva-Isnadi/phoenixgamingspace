const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
app.use(cors());
app.use(express.json());

//test server
app.get("/", (req,res) => {
    res.send("Phoenix Backend is running ");
});

app.listen(4000, () => {
  console.log("Server jalan di http://localhost:4000");
});
app.get("/api/rooms", (req,res) => {
    db.all("SELECT * FROM rooms", (err, rows) => {
        res.json(rows);
    })
})

app.post("/api/rooms", (req, res) => {
  const { name, price, desc } = req.body;
  db.run(
    "INSERT INTO rooms (name, price, desc) VALUES (?, ?, ?)",
    [name, price, desc],
    () => {
      res.json({ message: "Room berhasil ditambahkan" });
    }
  );
});

// GET games
app.get("/api/games", (req, res) => {
  db.all("SELECT * FROM games", (err, rows) => {
    res.json(rows);
  });
});

// POST games
app.post("/api/games", (req, res) => {
  const { title, genre, image } = req.body;
  db.run(
    "INSERT INTO games (title, genre, image) VALUES (?, ?, ?)",
    [title, genre, image],
    () => {
      res.json({ message: "Game berhasil ditambahkan" });
    }
  );
});

// GET bookings
app.get("/api/bookings", (req, res) => {
  db.all("SELECT * FROM bookings", (err, rows) => {
    res.json(rows);
  });
});

// POST booking
app.post("/api/bookings", (req, res) => {
  const { name, room_id, date, time_start, time_end } = req.body;
  db.run(
    `INSERT INTO bookings (name, room_id, date, time_start, time_end)
     VALUES (?, ?, ?, ?, ?)`,
    [name, room_id, date, time_start, time_end],
    () => {
      res.json({ message: "Booking berhasil" });
    }
    
  );
  
});

app.post("/api/bookings", (req, res) => {
  console.log("BODY MASUK:", req.body); // <---
  const { name, room_id, date, time_start, time_end } = req.body;
  db.run(
    `INSERT INTO bookings (name, room_id, date, time_start, time_end)
     VALUES (?, ?, ?, ?, ?)`,
    [name, room_id, date, time_start, time_end],
    () => {
      res.json({ message: "Booking berhasil" });
    }
  );
});
