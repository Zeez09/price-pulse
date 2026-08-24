const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();


const express = require("express");
const connectDB = require("./config/db");


const app = express();
const PORT = 5000;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("backend is running");
});

connectDB();

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});