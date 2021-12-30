const mongoose = require("mongoose")
const Schema = mongoose.Schema

const menuItemSchema = new Schema({
    itemName:{
        type:String,
        required:true
    },
    itemPrice:{
        type:Number,
        required:true   
    },
    itemDescription:{
        type:String,
        required:true
    },
    isItemAvailable: {
        type: Boolean,
        default: true,
    },
    itemReview:{
        type: String,
        required:false
    },
    itemCategory:{
        type: String,
        required:true
    }
})

const MenuItem = mongoose.model("MenuItem", menuItemSchema)

module.exports=MenuItem