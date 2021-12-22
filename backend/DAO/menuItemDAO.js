const menuItemSchema = require('../models/menuItemModel')

exports.fetchAllMenuItems = async function(){
    try{
        let allMenuItems = await menuItemSchema.find();
        return allMenuItems
    }
    catch(e){
        console.log("Items cannot be found")
    }
}

exports.addMenuItem = async function(menuItem){
    try{
        let addedMenuItem = await menuItemSchema.create(menuItem);
        return addedMenuItem.save()
    }
    catch(e){
        console.log(e)
    }
}

