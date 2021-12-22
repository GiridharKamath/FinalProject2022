const express = require("express")
const menuItemService = require('../services/menuItemService')
const router = express.Router()
const bodyParser = require("body-parser"); //convert json file to normal texts
router.use(bodyParser.json())

router.get("/allMenuItems",async(req,res)=>{
    try{
        let menuItem = await menuItemService.fetchAllMenuItems();
        res.send(menuItem)  
    }
    catch(e){
        console.log("Invalid Input")
    }
})

router.post("/addMenuItem", async(req,res)=>{
    try{
        console.log(req.body)
        let newMenuItem1 = {
            itemName:req.body.itemName,
            itemPrice:req.body.itemPrice,
            itemDescription:req.body.itemDescription
        }
        let newMenuItem = await menuItemService.addMenuItem(newMenuItem1);
        res.send(newMenuItem)
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router