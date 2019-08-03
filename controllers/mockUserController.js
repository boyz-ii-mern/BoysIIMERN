// here's where you'd import your database models if you were using them.

const userController = {
    getAuthenticatedUser: (request, response) => {
        console.log("Authenticated User", request.user);
        response.json(request.user);
    },
    login: (request, response) => {
        console.log("UserController.login")
        response.json(request.user);

    },
    logout: (request, response) => {
        request.logout();
        response.send("user logged out");
    }
}

module.exports = userController;