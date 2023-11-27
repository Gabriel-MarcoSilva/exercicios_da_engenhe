const express = require('express')
const routes = express.Router()

const BatalhaCodeController = require('../app/controller/BatalhaCodeController')

routes.get('/', (req, res) => {
    res.status(200).json({
        "messages": "Tudo ok"
    })
})
routes.post("/round-code", BatalhaCodeController.create)
routes.get("/round-code", BatalhaCodeController.list)
routes.delete("/delet-round-code/:_id", BatalhaCodeController.delete)
routes.get("/round-code/:_id", BatalhaCodeController.byId)
routes.delete("/delet-round-code/:_id", BatalhaCodeController.delete)
routes.delete("/delet-round-code", BatalhaCodeController.deleteAll)

/*routes.post("/login", UserController.login);
routes.post("/message", MenssageController.create);

routes.use(auth.validatioinToken)

routes.get("/signup", UserController.userList);
routes.put("/signup/:id", UserController.userUpdate);
routes.get("/listMessage", MenssageController.list);
routes.put("/listMessage/:id", MenssageController.done);

routes.use(auth.validationUser)*/

module.exports = routes