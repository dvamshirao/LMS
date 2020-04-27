//create mini express appliatio to handle admin requests
const exp=require("express")
var bcrypt=require("bcrypt")
const adminApp=exp.Router();

adminApp.use(exp.json())
//import dbo from db.js
const dbo=require('../db');
dbo.initDb();


const jwt=require("jsonwebtoken")

adminApp.get('/readprofile/:username',(req,res)=>{
    res.send({message:"admin profile works"})
});

userApp.post('/login',(req,res)=>{
    var adminCollectionObj=dbo.getDb().admincollectionobj;
    //verify username
    userCollectionObj.findOne({username:req.body.username},(err,userObj)=>{
        if(err)
        {
            console.log("error in read");
        }
        else if(userObj==null)
        {
            res.send({message:'invalid username'});
        }
        else
        {
            bcrypt.compare(req.body.password,userObj.password,(err,result)=>{
                if(err)
                {
                    console.log("err in password compare",err);
                }
                else if(result==false)
                {
                    res.send({message:'invalid password'});
                }
                else
                {
                    //create a token and send it to client
                    jwt.sign({username:userObj.username},'ssshhh',{expiresIn:60},(err,signedToken)=>{
                        if(err)
                        {
                            console.log("err ",err);
                        }
                        else
                        {
                            res.send({message:signedToken,username:userObj.username});
                        }
                    })  
                }
            });
        }
    })

})

adminApp.post('/login',(req,res)=>{
    res.send({message:"admin login works"})
});

//export adminApp

module.exports=adminApp;