// const cookieParser= require('cookie-parser');
const express = require('express');
const app =express();
const bcrypt=require('bcrypt');
// app.use(cookieParser());

// this is encrypt
app.get("/", function(req,res) {
    bcrypt.genSalt(10, function(err,salt) {
        bcrypt.hash("pololololoo", salt, function(err,hash) {
     console.log(hash);
        });
    });
})

// checking it encrpted true or not
app.get("/", function(req,res) {
    bcrypt.compare("pololololoo", "$2b$10$tiVAeCHPWpSEJj0hKeHjqOCpZC/VUzSH1LW3eg4iA9KusN8r8lCzi", function(err, result) {
        console.log(result);
    })
})

// leaning how cookiea set and read
// app.get("/", function(req,res) {
//     res.cookie("name", "Abhishek");
//     res.send("done");
// })

// app.get("/read", function(req,res) {
//     console.log(req.cookies);
//     res.send("read page");
// })
app.listen(3000);