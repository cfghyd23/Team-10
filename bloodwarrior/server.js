const exp=require('express');
const mongoose=require("mongoose")
const bloodReqModel=require("./models/Requests");

require('dotenv').config()
const app=exp();
//import path module
const path=require('path')
const mclient=require('mongodb').MongoClient;
app.use(exp.json());
//joining node js and react js application 
app.use(exp.static(path.join(__dirname,'./build')))

//importi ng users and products api
const userApp=require('./APIs/users')
const productApp=require('./APIs/products')


//const dbURI="mongodb+srv://manasamanasa611:mspq137@cluster0.grhxlyb.mongodb.net/?retryWrites=true&w=majority"
//connection mongodb

mongoose.connect(process.env.DATABASE_URI)


app.post('/req-api/bloodRequests', (req, res) => {
    const { name,userId, bloodGroup, location, unitsRequired, contact, urgency } = req.body;
  
    const newRequest = new bloodReqModel({
      name,
      userId,
      bloodGroup,
      location,
      unitsRequired,
      contact,
      urgency,
    });
  console.log(newRequest)
    newRequest.save((err) => {
      if (err) {
        res.status(500).send('Error creating blood request');
      } else {
        res.status(201).send('Blood request created successfully');
      }
    });
  });
  
  // Get all blood requests
  app.get('/bloodRequests', (req, res) => {
    console.log("get");
    bloodReqModel.find({}, (err, requests) => {
      if (err) {
        res.status(500).send('Error retrieving blood requests');
      } else {
        res.json(requests);
      }
    });
  });
  
  // Get a specific blood request
  app.get('/bloodRequests/:id', (req, res) => {
    bloodReqModel.findById(req.params.id, (err, request) => {
      if (err) {
        res.status(500).send('Error retrieving blood request');
      } else if (!request) {
        res.status(404).send('Blood request not found');
      } else {
        res.json(request);
      }
    });
  });
  
  // Update a blood request
  app.put('/bloodRequests/:id', (req, res) => {
    const { name, bloodGroup, location, unitsRequired, contact, urgency } = req.body;
  
    bloodReqModel.findByIdAndUpdate(
      req.params.id,
      { name, bloodGroup, location, unitsRequired, contact, urgency },
      (err, request) => {
        if (err) {
          res.status(500).send('Error updating blood request');
        } else if (!request) {
          res.status(404).send('Blood request not found');
        } else {
          res.send('Blood request updated successfully');
        }
      }
    );
  });
  
  // Delete a blood request
  app.delete('/bloodRequests/:id', (req, res) => {
    bloodReqModel.findByIdAndDelete(req.params.id, (err, request) => {
      if (err) {
        res.status(500).send('Error deleting blood request');
      } else if (!request) {
        res.status(404).send('Blood request not found');
      } else {
        res.send('Blood request deleted successfully');
      }
    });
  });

  //handling invalid path
app.use((request,response,next)=>{
    response.send({message:`path ${request.url} is invalid`})
})
//handling errors
app.use((error,request,response,next)=>{
    response.send({reason:`${error.message}`})
})
//creating different routes
app.use('/user-api',userApp)
app.use('/product-api',productApp)
//dealing withpage refreshes
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'/build/index.html'))
})
mclient.connect(process.env.DATABASE_URI)
.then((client)=>{
    let dbObj=client.db("jpdb")
    // let usersObj=dbObj.createCollection("users")
    // let productsObj=dbObj.createCollection("products")
    //creatin object for users and products collection
    let usersObj=dbObj.collection("users")
    let productsObj=dbObj.collection("products")
    
    //setting products and users collection object
    
    app.set("usersObj",usersObj)
    app.set("productsObj",productsObj)
   
    console.log("DB connected successfully")
})
.catch(err=>console.log("error in db connection"))
app.listen(process.env.PORT,()=>{console.log("server is listening at 5000")})