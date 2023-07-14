import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Hello World");
 res.send("ma");
});
app.get("/name", (req, res) => {
 console.log("mahasnain");
 res.send("M.A.Hasnain");
});

app.get("/name/:username", (req, res) => {
 const username = req.params.username;
 res.json({"massage": username});
});

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});

