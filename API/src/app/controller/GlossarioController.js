const GlossarioSchema = require("../../database/GlossarioSchema")

class GlossarioController {
    async create(req, res) {

        const { keyWord, description, created_at, updated_at } = req.body;
        console.log(req.body)
        if ( !keyWord || !description || !created_at || !updated_at) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const result = await GlossarioSchema(req.body).save()
            console.log("cadastrado com sucesso")
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem" })
        }
    }

    async edit(req, res) {

        const { keyWord, description, created_at, updated_at } = req.body;
        console.log(req.body)
        
        if ( !keyWord || !description || !created_at || !updated_at) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const user = await GlossarioSchema.updateOne({id: req.body.id}, {$set: {keyWord: req.body.keyWord, description: req.body.description, updated_at: req.body.updated_at}})
            console.log("cadastrado com sucesso")
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err})
        }
    }

    async list(req, res) {
        const user = await GlossarioSchema.find({}, { id: 1, keyWord: 1, description: 1, updated_at: 1, created_at: 1 })

        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await GlossarioSchema.deleteOne({ id: req.params.id })
        console.log(user)

        return res.status(200).json(user)

    }
}

module.exports = new GlossarioController()