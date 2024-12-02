import express from "express";
const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numletters =req.body["fName"].length +req.body["lName"].length;
  res.render("index.ejs",{numberofletters:numletters})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
