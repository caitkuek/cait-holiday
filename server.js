require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.static("./frontend/dist"))

app.get("/api", (req, res) => {
    res.send("hi there")
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})