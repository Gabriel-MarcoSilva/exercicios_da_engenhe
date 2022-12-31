const express = require('express')
const UserController = require("../app/controller/UserController")
const MenssageController = require("../app/controller/MenssagenController")
const routes = express.Router()

const auth = require("../middleware/auth")

routes.get('/', (req, res) => {
    res.status(200).json({
        "messages": "Tudo ok"
    })
})

routes.post("/login", UserController.login);
routes.post("/message", MenssageController.create);

routes.use(auth.validatioinToken)

routes.get("/signup", UserController.userList);
routes.put("/signup/:id", UserController.userUpdate);
routes.get("/listMessage", MenssageController.list);
routes.put("/listMessage/:id", MenssageController.done);

routes.use(auth.validationUser)
routes.post("/signup", UserController.signup);

module.exports = routes