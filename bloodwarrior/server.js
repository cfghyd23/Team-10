const exp=require('express');

require('dotenv').config()
const app=exp();
const path=require('path')
const mclient=require('mongodb').MongoClient;
app.use(exp.json());
app.use(exp.static(path.join(__dirname,'./build')))

const userApp=require('./APIs/users')
const bloodbankApp=require('./APIs/bloodbanks')

app.use('/user-api',userApp)
app.use('/bloodbank-api',bloodbankApp)
//dealing withpage refreshes
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'/build/index.html'))
})
//const dbURI="mongodb+srv://manasamanasa611:mspq137@cluster0.grhxlyb.mongodb.net/?retryWrites=true&w=majority"
//connection mongodb
mclient.connect(process.env.DATABASE_URI)
.then((client)=>{
    let dbObj=client.db("jpdb")
    // let usersObj=dbObj.createCollection("users")
    // let productsObj=dbObj.createCollection("products")
    //creatin object for users and products collection
    let usersObj=dbObj.collection("users")
    let bloodbanksObj=dbObj.collection("bloodbanks")
    let donationrequestsObj=dbObj.collection("donationrequests")
    //setting products and users collection object
    
    app.set("usersObj",usersObj)
    app.set("bloodbanksObj",bloodbanksObj)
    app.set("donationrequestsObj",donationrequestsObj)
    console.log("DB connected successfully")
})
.catch(err=>console.log("error in db connection"))

//handling invalid path
app.use((request,response,next)=>{
    response.send({message:`path ${request.url} is invalid`})
})
//handling errors
app.use((error,request,response,next)=>{
    response.send({reason:`${error.message}`})
})
app.listen(process.env.PORT,()=>{console.log("server is listening at 5000")})