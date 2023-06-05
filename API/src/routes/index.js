const express = require('express')
const UserController = require("../app/controller/UserController")
const MenssageController = require("../app/controller/MenssagenController")
const GlossarioController = require('../app/controller/GlossarioController')
const routes = express.Router()

const auth = require("../middleware/auth")
const ReferenciaController = require('../app/controller/ReferenciaController')
const ImagesController = require('../app/controller/ImagesController')

routes.get('/', (req, res) => {
    res.status(200).json({
        "messages": "Tudo ok"
    })
})

routes.get("/glossario", GlossarioController.list)
routes.post("/cad-glossario", GlossarioController.create)
routes.delete("/delet-glossario/:id", GlossarioController.delete)
routes.put("/edit-glossario/:id", GlossarioController.edit)
routes.get("/glossario/length", GlossarioController.size)
routes.get("/glossario/:id", GlossarioController.getbyId)


routes.get("/referencias", ReferenciaController.list)
routes.post("/cad-referencias", ReferenciaController.create)
routes.delete("/delet-referencia/:id", ReferenciaController.delete)
routes.put("/edit-referencia/:id", ReferenciaController.edit)
routes.get("/referencia/length", ReferenciaController.size)


routes.get("/images", ImagesController.list)
routes.post("/images", ImagesController.create)
routes.get("/images/:id", ImagesController.getbyId)
routes.delete("/images/:id", ImagesController.delete)
routes.put("/images/:id", ImagesController.edit)

/*routes.post("/login", UserController.login);
routes.post("/message", MenssageController.create);

routes.use(auth.validatioinToken)

routes.get("/signup", UserController.userList);
routes.put("/signup/:id", UserController.userUpdate);
routes.get("/listMessage", MenssageController.list);
routes.put("/listMessage/:id", MenssageController.done);

routes.use(auth.validationUser)*/
routes.post("/signup", UserController.signup);

module.exports = routes