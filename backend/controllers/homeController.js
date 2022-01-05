const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser"); //convert json file to normal texts
router.use(bodyParser.json())

router.get("/adminDashboard",async (req,res)=>{
    res.json("Welcome to Admin dashboard")
})

module.exports = router