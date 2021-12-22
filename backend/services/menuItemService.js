// const menuItemSchema = require('../models/menuItemModel')

const menuItemDAO = require('../DAO/menuItemDAO')

exports.fetchAllMenuItems = async function(){
    try{
        let menuItem = await menuItemDAO.fetchAllMenuItems();
        return menuItem
    }
    catch(e){
        console.log("Invalid Input")
    }
}

exports.addMenuItem = async function(menuItem){
    try{
        // let newUser = {
        //     userName:user.userName,
        //     userPassword:user.userPassword,
        //     email:user.email
        // }
        // let users = await userDAO.fetchUser({})

        let addedMenuItem = await menuItemDAO.addMenuItem(menuItem);
        return addedMenuItem
    }
    catch(e){
        console.log(e)
    }
}

