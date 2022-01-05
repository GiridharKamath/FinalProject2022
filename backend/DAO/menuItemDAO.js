const menuItemSchema = require('../models/menuItemModel')

exports.fetchAllMenuItems = async function(filter){
    try{
        let allMenuItems = await menuItemSchema.find(filter);
        return allMenuItems
    }
    catch(e){
        console.log("Items cannot be found")
    }
}

exports.fetchItemById = async function (id) {
    try {
      let item = await menuItemSchema.findById(id);
      return item
    } 
    catch (e) {
      console.error(`cannot view the menuItem ${e}`)
    }
};

exports.addMenuItem = async function(menuItem){
    try{
        let addedMenuItem = await menuItemSchema.create(menuItem);
        return addedMenuItem.save()
    }
    catch(e){
        console.log(e)
    }
}

exports.removeAvailable = async function (id) {
    try {
      let item = await menuItemSchema.findById(id);
      let removeA = await item.updateOne({ isItemAvailable: false });
      return removeA;
    }
    catch (e) {
      console.error(`cannot remove the menuItem ${e}`);
    }
};

exports.makeAvailable = async function (id) {
  try {
    let item = await menuItemSchema.findById(id);
    let makeA = await item.updateOne({ isItemAvailable: true });
    return makeA;
  }
  catch (e) {
    console.error(`cannot remove the menuItem ${e}`);
  }
};

exports.updateItem = async (itemId, item) => {
    try {
      let itemObj = await menuItemSchema.findByIdAndUpdate(
        itemId,
        { $set: item },
        { new: true }
      );
      return itemObj.save();
    } 
    catch (e) {
      console.error(`cannot update the menuItem ${e}`);
    }
};