const express = require('express')
const routes = express.Router()

const CompetidorController = require('../app/controller/CompetidorController')

routes.get('/', (req, res) => {
    res.status(200).json({
        "messages": "Tudo ok"
    })
})


routes.get("/competidor", CompetidorController.list)
routes.get("/competidor/:_id", CompetidorController.byId)
routes.post("/cad-competidor", CompetidorController.create)
routes.delete("/delet-competidor/:_id", CompetidorController.delete)
routes.put("/edit-competidor/:_id", CompetidorController.edit)


/*routes.post("/login", UserController.login);
routes.post("/message", MenssageController.create);

routes.use(auth.validatioinToken)

routes.get("/signup", UserController.userList);
routes.put("/signup/:id", UserController.userUpdate);
routes.get("/listMessage", MenssageController.list);
routes.put("/listMessage/:id", MenssageController.done);

routes.use(auth.validationUser)*/

module.exports = routes