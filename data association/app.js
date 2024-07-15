const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", function (req, res) {
  res.send("heyy");
});

app.get("/create", async function (req, res) {
 let user=await userModel.create({
    username: "Abhishek",
    age:20,
    email: "kua77663@gmail.com"
 })
 res.send(user);
});

app.get("/post/create", async function(req,res) {
    let post = await postModel.create({
        postdate: "hey whats up",
        user: "669503a12f3868512921afb0"
    })
      
      let user =await userModel.findOne({_id: "669503a12f3868512921afb0"});
      user.posts.push(post._id);
      await user.save();

    res.send({post, user});
})
app.listen(3000);
