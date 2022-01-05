const express = require("express")
const userService = require('../services/userService')
const router = express.Router()
const bodyParser = require("body-parser"); //convert json file to normal texts
router.use(bodyParser.json())

router.route("/signup")
    .get(async (req, res) => {
        res.send("Welcome to signUp page")
    })
    .post(async (req, res) => {
        try {
            if (req.body.userName == "" || req.body.userPassword == "" || req.body.email == "") {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.json({ Success: false, Error: "Fill username and password" });
            }
            // console.log("hhsfhsdkfh")
            // console.log(req.body)
            let newUser1 = {
                userName: req.body.userName,
                userPassword: req.body.userPassword,
                email: req.body.email
            }
            let newUser = await userService.addUser(newUser1)
            // console.log(newUser)
            res.redirect("/user/login")
            // if (newUser.success) {
            //     res.statusCode = 200;
            //     res.setHeader("Content-type", "text/html");
            //     res.redirect("/user/login");
            // } else {
            //     res.statusCode = 500;
            //     res.setHeader("Content-Type", "application/json");
            //     res.json({ Success: false, Error: newUser });
            // }
        }
        catch (e) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ Success: false, Error: e });
        }
    })

router
    .route("/login")
    .get((req, res) => {
        res.send("welcome to login page");
    })
    .post (async (req, res) => {
        try {
            if (req.body.username == "" || req.body.userPassword == "") {
                let url = "/user" + req.url;
                res.redirect(url);
            }else{
                let user = await userService.validateLogin(req.body.userName,req.body.userPassword)
                if(!user.success){
                    res.json({user})
                }
                else{
                    if (user.user.isAdmin) {
                        res.redirect("/home/adminDashboard");
                      } else {
                        res.redirect("/menu/allMenuItems");
                      }
                }
            }
        } catch (e) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.json({ Success: false, Error: e });
        }
    })

router.get("/allUsers", async (req, res) => {
    try {
        let user = await userService.fetchUser({});
        res.send(user)
    }
    catch (e) {
        console.log("Invalid Input")
    }
})

router.post("/addUser", async (req, res) => {
    try {
        console.log(req.body)
        let newUser1 = {
            userName: req.body.userName,
            userPassword: req.body.userPassword,
            email: req.body.email
        }
        let newUser = await userService.addUser(newUser1);
        res.send(newUser)
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router