require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = process.env.PORT ?? 3001

// app.use(express.urlencoded({ extended: true }));
app.use(express.static("./frontend/dist"));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
//   cookie: { secure: true }
}))

app.get("/api", (req, res) => {
    res.send("hi there")
});

app.post("/api/login/", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
        res.send({status: "ok"})
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