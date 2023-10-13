const VitoriaSchema = require("../../database/VitoriaSchema")

class VitoriaController {
    async create(req, res) {
        const { comp, acabou } = req.body;
        console.log(req.body)
        if (!comp) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const result = await VitoriaSchema(req.body).save()
            console.log("cadastrado com sucesso")
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem", err })
        }
    }

    async edit(req, res) {

        const { comp, acabou} = req.body;

        const {_id} = req.params
        
        console.log(req.body)

        if ( !comp || !acabou) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const user = await VitoriaSchema.updateOne({ _id: req.params._id }, { $set: { comp: req.body.comp, acabou: req.body.acabou} })
            console.log(user)
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err })
        }
    }

    async list(req, res) {
        const user = await VitoriaSchema.find({}, { comp: 1, acabou: 1 })

        return res.status(200).json(user)
    }

    async byId(req, res) {
        console.log("oi")
        const user = await VitoriaSchema.findOne({ _id: req.params._id })
        console.log(user)
        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await VitoriaSchema.deleteOne({ _id: req.params._id })
        console.log(user)
        return res.status(200).json(user)
    }

    async deleteAll(req, res) {
        const user = await VitoriaSchema.deleteMany({})
        console.log(user)
        return res.status(200).json(user)
    }
}

module.exports = new VitoriaController()