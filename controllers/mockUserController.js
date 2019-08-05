// here's where you'd import your database models if you were using them.

let user = require("../models/user");
user.all(function (data){
    console.log("this is the return data", data);
})


const userController = {
    getAuthenticatedUser: (request, response) => {
        console.log("Authenticated User", request.user);
        response.json(request.user);
    },
    login: (request, response) => {
        console.log("UserController.login")
        response.json(request.user);

    },
    getAllUsers: (request, response) => {
        console.log("this is getAllUsers");
        console.log("this is user", user);
        user.all(function (data){
            console.log("this is the return data", data);
        })
    },

    logout: (request, response) => {
        request.logout();
        response.send("user logged out");
    }
}

module.exports = userController;