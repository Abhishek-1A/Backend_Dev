const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const path = require("path");
const cokkieparser = require("cookie-parser");
const userModel = require("./models/user");
const bcrypt = require('bcrypt');
const { hash } = require("crypto");


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", function (req, res) {
  res.render("index");
});
  
app.post('/create', async (req,res) =>{
  let {username , email, password, age} = req.body;
  
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async(err, hash) =>{
      let createdUser= await userModel.create({
        username,
        email,
        password: hash,
        age
      })
      res.send(createdUser);
    })
  })
});

app.listen(3000);
