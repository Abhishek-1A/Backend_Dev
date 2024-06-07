const express = require('express')
const app = express();

app.get('/', function(req,res) {
    res.send('welcome to my hotel.. How i can help you ?')
})

app.get('/chicken', (req,res) =>{
    res.send('sure sir iam happy to serve u chicken')
})
app.get('/idli', (req,res) =>{
    var customized_idli ={
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambher: true,
        is_chutni: false
    }
    res.send(customized_idli)
})
app.listen(4000, ()=>{
    console.log('Listioning on port 4000');
});















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
