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

adminApp.post('/login',(req,res)=>{
    var adminCollectionObj=dbo.getDb().admincollectionobj;
    //verify username
    adminCollectionObj.findOne({username:req.body.username},(err,adminObj)=>{
        if(err)
        {
            console.log("error in read");
        }
        else if(adminObj==null)
        {
            res.send({message:'invalid username'});
        }
        else
        {

            if(req.body.password==adminObj.password)
            {
                
                jwt.sign({username:adminObj.username},'ssshhh',{expiresIn:60},(err,signedToken)=>{
                    if(err)
                    {
                        console.log("err ",err);
                    }
                    else
                    {
                        res.send({message:signedToken,username:adminObj.username});
                    }
                })  
            }
            else{
                res.send({message:'invalid password'});
            }
           
        }
    })

})
adminApp.post('/bookregister',(req,res)=>{
    var adminCollectionObj=dbo.getDb().admincollectionobj;
    console.log(req.body);
    console.log(req.params);
    adminCollectionObj.findOne({ISBNnumber:req.body.ISBNnumber},(err,bookObjFromDB)=>{
       

        if(err)
        {
            console.log('error in register',err);
        }
        else if(bookObjFromDB!=null)
        {
            var len=(req.body.ids).length;
            for(let i=0;i<len;i++)
            {
                bookObjFromDB.ids.push(req.body.ids[i]);
               
            }
            adminCollectionObj.save(bookObjFromDB);
           
           
           console.log(bookObjFromDB);
           
           
            res.send({message:"book added to existed isbc"});
        }
        else{
            console.log("entered");
            adminCollectionObj.insertOne(req.body,(err,success)=>{
                if(err)
                {
                    console.log("error");
                }
                else{
                    res.send({message:"book registered succsessfully"});
                }
            })
        }
    

    })
});

adminApp.post('/login',(req,res)=>{
    res.send({message:"admin login works"})
});

//export adminApp

module.exports=adminApp;