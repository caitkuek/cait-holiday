require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");

const holidaysController = require("./controllers/HolidaysController");

const app = express();
const PORT = process.env.PORT ?? 3001
const MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017/holiday"

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// when deploying, make it cloud and not local host
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// app.use(express.urlencoded({ extended: true }));
app.use(express.static("./frontend/dist"));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { secure: true }
}))
app.use("/api/holidays", holidaysController);

app.get("/api", (req, res) => {
    res.send("hi there")
});

app.post("/api/login/", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
        req.session.user = "admin"; // create session and store cookie
        console.log("login session", req.session.user)
        res.send({status: "success", data: { name: "admin", id: "aaa"}});
    } else{
        res.send({ status: "error"})
    }
  });

// app.post("/api/login/", (req, res) => {
//     const { username, password } = req.body;
  
//     if (username === "admin" && password === "123") {
//       req.session.loggedIn = true
//       res.send("Login Successful");
//     } else {
//       res.send("Login Fail");
//     }
//   });

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/dist/index.html")); // wtf is this man??
  });


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})