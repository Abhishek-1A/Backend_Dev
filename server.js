const express = require("express");

const app = express();
const userModel = require('./usermodeldb')
app.get("/", (req, res) => {
  res.send("hey Welcome djkshkjdshfkjh");
});

// craete 
app.get('/create', async (req,res) =>{
  let createduser = await userModel.create({
    name: "Aditi",
    email: "aditimc@gmail.com",
    username: "adty"
  })
  res.send(createduser);
})
// update
app.get('/update', async(req,res) =>{
  let updateuser = await userModel.findOneAndUpdate({username: "abkumar"},{name: "Abhishek kumar ji"}, {new: true});
  res.send(updateuser);
})
// read
app.get("/read", async(req,res) =>{
  let read=await userModel.find();
  res.send(read);
})
// delete 
app.get("/dalete", async(req,res) =>{
  let users = await userModel.findOneAndDelete({username: "adty"});
  res.send(users);
})
app.listen(3000);

// console.log("server file is running");

// function add (a,b) {
//     return a+b;
// }

// var add = function(a,b) {
//     return a+b;
// }

// var add = (a,b) =>{
//     return a+b;
// }

// var result = add(2,3);
// console.log(result);

// callback function

// function callback() {
//     console.log("now calling callback is completed");
// }

// const add= function(a,b, abhi) {
//     var result = a+b;
//     console.log(result);  // main function work complete
//     abhi();
// }

// // add(10,20, function() {
// //     console.log('add completed');
// // })

// add(10,10, () => console.log('add completed'));
