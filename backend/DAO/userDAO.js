const userSchema = require('../models/userModel')

exports.fetchUser = async function(filter){
    try{
        let user = await userSchema.find(filter);
        return user
    }
    catch(e){
        console.log("Invalid Input")
    }
}

exports.addUser = async function(user){
    try{
        let addedUser = await userSchema.create(user);
        return addedUser.save()
    }
    catch(e){
        console.log(e)
    }
}

