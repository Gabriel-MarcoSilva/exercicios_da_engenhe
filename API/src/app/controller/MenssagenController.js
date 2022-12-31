const MenssagenSchema = require("../../database/MessageSchema")

class MenssageController {
    async create(req, res) {
        const { name, email, messages } = req.body;
        if (!name || !messages || !email) {
            return res.status(500).json({"message":  "Campos obrigatórios faltam ser preenchidos"})
        }

        try {
            const result = await MenssagenSchema(req.body).save()
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({"message":  "erro ao enviar mensagem"})
        }
    }

    async list(req, res){
        const user = await MenssagenSchema.find({}, {_id: 1, messages: 1, done:1, name: 1, email: 1, types: 1, created_at: 1 })

        return res.status(200).json(user)
    }

    async done(req, res){
        const {id} = req.params

        const {done} = req.body

        try{
            const result = await MenssagenSchema.updateOne({_id: id},{$set: {done: done}})
            //const result = await MenssagenSchema.updateOne({_id: id},{$set: req.body})

            return res.status(200).json(result)
        }catch(err){
            return res.status(500).json({"message":  "erro ao enviar mensagem"})
        }
    }
}

module.exports = new MenssageController()