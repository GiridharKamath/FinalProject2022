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

exports.fetchItemById = async function(id){
    try{
        let item = await menuItemDAO.fetchItemById(id);
        return item
    }
    catch(e){
        console.error(`cannot view the item ${e}`);
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

exports.removeAvailable = async function (itemId) {
    try {
      let removeA = await menuItemDAO.removeAvailable(itemId);
      return removeA;
    } 
    catch (e) {
      console.error(`cannot delete the item ${e}`);
    }
};

exports.makeAvailable = async function (itemId) {
    try {
      let makeA = await menuItemDAO.makeAvailable(itemId);
      return makeA;
    } 
    catch (e) {
      console.error(`cannot delete the item ${e}`);
    }
};

exports.updateItem = async (itemId, item) => {
    try {
        let itemm = await menuItemDAO.updateItem(itemId, item);
        return itemm
    } 
    catch (e) {
      console.error(`cannot update the menuItem ${e}`);
    }
};