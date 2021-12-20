const userSchema = require('../models/userModel')

const userDAO = require('../DAO/userDAO')

exports.fetchUser = async function(filter){
    try{
        let user = await userDAO.fetchUser(filter);
        return user
    }
    catch(e){
        console.log("Invalid Input")
    }
}

exports.addUser = async function(user){
    try{
        // let newUser = {
        //     userName:user.userName,
        //     userPassword:user.userPassword,
        //     email:user.email
        // }
        // let users = await userDAO.fetchUser({})

        let addedUser = await userDAO.addUser(user);
        return addedUser
    }
    catch(e){
        console.log(e)
    }
}

