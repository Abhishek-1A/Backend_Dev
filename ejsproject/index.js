const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { log } = require("console");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    res.render("index",{files: files});
  });
});
app.get("/files/:filename", function (req, res) {
  const filename = req.params.filename;
  fs.readFile(`./files/${filename}`, "utf-8", function (err, filedata) {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.render('show', { filename: req.params.filename, filedata: filedata});
  });
});


app.post("/create", function (req, res) {
  fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}.txt`, req.body.details, function(err) {
    res.redirect("/")
  });
});


app.listen(3000);
