const UserSchema = require("../../database/UserSchema")

const bcrypt = require('bcrypt')

class UserController{
    async signup(req, res){
        //console.log(req.body)
        const {name, password, email, types} = req.body

        let r = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,}$/;

        if(password.length < 8 || r.test(password) === false){
            return res.status(500).json({ "message":  "Senha muito fraca"})
        }if(!name || !email){
            return res.status(500).json({"message":  "Campos obrigatórios falams er preenchidos"})
        }

        const newPassword = bcrypt.hashSync(password, 8)

        const user = new UserSchema({name, password: newPassword, email, types})

        try{
            const result = await user.save()

            const data = {id: result.id, name: result.name, email: result.email, types: result.types, created_at: result.created_at}

            res.status(201).json(data)
        }catch (err) {
            if(err.code === 11000){
                return res.status(500).json({"message": "Dados já existentes no banco de dados"})
            }

            return res.status(500).json({"message": "Houve algum erro"})
        }
    };

    async userList(req, res){
        const user = await UserSchema.find({}, {_id: 1, name: 1, email: 1, types: 1, created_at: 1 })

        return res.status(200).json(user)
    }
}

module.exports = new UserController()