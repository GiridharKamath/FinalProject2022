const express = require("express")
const userService = require('../services/userService')
const router = express.Router()
const bodyParser = require("body-parser"); //convert json file to normal texts
router.use(bodyParser.json())
router.get("/user/getAll",async(req,res)=>{
    try{
        let user = await userService.fetchUser({});
        res.send(user)  
    }
    catch(e){
        console.log("Invalid Input")
    }
})

router.post("/user/addUser", async(req,res)=>{
    try{
        console.log(req.body)
        let newUser1 = {
            userName:req.body.userName,
            userPassword:req.body.userPassword,
            email:req.body.email
        }
        let newUser = await userService.addUser(newUser1);
        res.send(newUser)
    }
    catch(e){
        console.log(e)
    }
})



module.exports = router