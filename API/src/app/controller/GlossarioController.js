const GlossarioSchema = require("../../database/GlossarioSchema")

class GlossarioController {
    async create(req, res) {

        const { palavra, descricao, vinculo } = req.body;
        console.log(req.body)
        if (!req.body) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const result = await GlossarioSchema(req.body).save()
            console.log("cadastrado com sucesso")
            return res.status(200).json(result)
        } catch (err) {
            console.log(err)
            return res.status(500).json({ "message": "erro ao enviar mensagem" })
        }
    }

    async edit(req, res) {

        const { palavra, descricao, vinculo } = req.body;
        console.log(req.body)
        
        if ( !palavra || !descricao || !vinculo) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const user = await GlossarioSchema.updateOne({id: req.body.id}, {$set: {palavra: req.body.palavra, descricao: req.body.descricao, vinculo: req.body.vinculo}})
            console.log("cadastrado com sucesso")
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err})
        }
    }

    async list(req, res) {
        const user = await GlossarioSchema.find({}, { id: 1, palavra: 1, descricao: 1, updated_at: 1, vinculo: 1 })

        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await GlossarioSchema.deleteOne({ id: req.params.id })
        console.log(user)

        return res.status(200).json(user)

    }

    async getbyId(req, res){
        const user = await GlossarioSchema.findOne({id: req.params.id})
        console.log(user)
        return res.status(200).json(user)
    }

    async size(req, res){
        const user = await GlossarioSchema.find({}, {id: 1})

        console.log(user)

        return res.status(200).json(user.length)
    }
}

module.exports = new GlossarioController()