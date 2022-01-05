const express = require("express")
const menuItemService = require('../services/menuItemService')
const router = express.Router()
const bodyParser = require("body-parser"); //convert json file to normal texts
router.use(bodyParser.json())

router.get("/allMenuItems", async (req, res) => {
    try {
        let menuItem = await menuItemService.fetchAllMenuItems(req.query);
        res.json({msg:"Menu Items",menuItem});
    }
    catch (e) {
        console.log("Invalid Input")
    }
})

router.get("/getItemById", async (req, res) => {
    try {
        let menuItem = await menuItemService.fetchItemById(req.query.id);
        res.send(menuItem)
    }
    catch (e) {
        console.log("Invalid Input")
    }
})

router.post("/addMenuItem", async (req, res) => {
    try {
        console.log(req.body)
        let newMenuItem1 = {
            itemName: req.body.itemName,
            itemPrice: req.body.itemPrice,
            itemDescription: req.body.itemDescription,
            itemReview: req.body.itemReview,
            itemCategory: req.body.itemCategory
        }
        let newMenuItem = await menuItemService.addMenuItem(newMenuItem1);
        res.send(newMenuItem)
    }
    catch (e) {
        console.log(e)
    }
})

router.put("/updateItem", async (req, res) => {
    try {
        let item = await menuItemService.updateItem(req.query.id, req.body)
        console.log(req.query)
        res.send(item)
    }
    catch (e) {
        console.log(e)
    }
})

router.patch("/removeItemAvailable", async (req, res) => {
    try {
        let item = await menuItemService.removeAvailable(req.query.id)
        res.send(item)
    }
    catch (e) {
        console.log(e)
    }
})


router.patch("/makeItemAvailable", async (req, res) => {
    try {
        let item = await menuItemService.makeAvailable(req.query.id)
        res.send(item)
    }
    catch (e) {
        console.log(e)
    }
})

module.exports = router