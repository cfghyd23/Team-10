const exp=require('express')
const bcryptjs=require("bcryptjs")
const bloodbankApp=exp.Router()
const jwttoken=require("jsonwebtoken")
const authUser=require("../middleware/authUser")
bloodbankApp.use(exp.json())

const middleware1=(request,response,next)=>{
      console.log("middleware 1 eecuted")
      next()
}
//to execute middleware for each request
//bloodbankApp.use(middleware1)
//to execute middleware for  a specific request
// bloodbankApp.get('/getusers',middleware1,(request,response)=>{
//     response.send({message:"all users",payload: users});
// })
//to execute middleware for  a specific path
//bloodbankApp.use('/getusersid/:id',middleware1)
bloodbankApp.get('/userprofile',authUser,async(request,response)=>{
    // let id=(+request.params.id)
    // let userobj=users.find(userobj=>userobj.id==id)
    // response.send({message:"user found",payload: userobj});
    let User=request.app.get("bloodbanksObj")
    //let usercred=request.body;
    //var trainer_id;
    const userid = request.user;
    
    if(!userid) {
        response
        .send({
            message : "Not found, userid is required"
        });
        return;
    }
    else
    { 
       // const user = await User.findById(userid)
        let user= await User.findOne({username:userid})
       // console.log(user)
        response
        .send(
           {fullname:user.fullname,email:user.email,location:user.location,message:"user found"} 
        );
    }
})
bloodbankApp.post('/getusers',async(request,response,next)=>{
    try{
        //console.log(request)
        //user collection object
        let bloodbanksObj=request.app.get("bloodbanksObj")
        let usercred=request.body;
        //search for user by id
        //console.log(request.body)
        let finduser= await bloodbanksObj.findOne({username:usercred.username})
        //if user exists
        if(finduser==null)
        {
            response.send({message:"user doesn't exists"});
        }
        else{
             let status=await bcryptjs.compare(usercred.password,finduser.password)
             if(status==false)
             {
                response.send({message:"Invalid password"});
             }
             else{
                 let token=jwttoken.sign({userid:usercred.username},'abcdef')
                 response.send({message:"login successful",payload:token,userobj:finduser});
             }
        }
    }
    catch(err){
        next(err)
    }
    //response.send({message:"user found",payload: userobj});
})
bloodbankApp.post('/createusers',async(request,response,next)=>{
    try{
        //user collection object
        let bloodbanksObj=request.app.get("bloodbanksObj")
        let newuser=request.body;
        //console.log(request.body)
        //search for user by id
        let finduser= await bloodbanksObj.findOne({username:newuser.username})
        //if user exists
        if(finduser!=null)
        {
            response.send({message:"user already exists"});
        }
        else{
            //hashing password
            let hashpassword=await bcryptjs.hash(newuser.password,10)
            //replacing plain pswd with hashed one
            newuser.password=hashpassword;
            //inserting user
            await bloodbanksObj.insertOne(newuser)
            response.send({message:"user created successfully"});
        }
    //console.log(request.body)
    
    }
    catch(err)
    {
        next(err)
    }
})
module.exports=bloodbankApp;