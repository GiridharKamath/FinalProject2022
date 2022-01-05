const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User