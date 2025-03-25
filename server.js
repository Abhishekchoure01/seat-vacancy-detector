const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let seatData = {}; // Store seat vacancy data

// Endpoint to receive seat data from ESP8266
app.post("/update-seat", (req, res) => {
    const { seatId, status } = req.body;
    seatData[seatId] = status;
    console.log('Seat ${seatId} is ${status}');
    res.send({ message: "Seat status updated!" });
});

// Endpoint to fetch seat data for website
app.get("/get-seats", (req, res) => {
    res.json(seatData);
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});