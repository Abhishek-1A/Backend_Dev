const express = require('express');
const router = express.router;

// post rout to add a person
   router.post('/person', async(req,res) =>{
    try{
        const data=req.body  // Assuming the request body containes the person data
        
        // create a new person document to the database
        const newPerson = new Person(data);
        // save the new person to the database
        const response =await newPerson.save();
        res.status(200).json(response);
    } 
    catch(err) {
        console.log(err);
        res.status(500).json({error: 'Invalid Server Error'});
    }
})

// get method to get the person 

router.get('/person', async(req,res) =>{
    try{
    const data = await Person.find();
    console.log('data  fetched');
    res.status(200).json(data);
    } catch(err) {
     console.log(err);
     res.status(500).json({error: 'Invalid Server Error'});

    }
})
