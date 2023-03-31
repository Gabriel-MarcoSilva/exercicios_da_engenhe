const ReferenciaSchema = require("../../database/ReferenciaSchema")

class ReferenciaController {
    async create(req, res) {
        const { id, author, title, subtitle, numEdition, publisher, created_at, updated_at, publication, Pag, Vol, Year } = req.body;
        console.log(req.body)
        if (!req.body) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const result = await ReferenciaSchema(req.body).save()
            console.log("cadastrado com sucesso")
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem", err })
        }
    }

    async edit(req, res) {

        const { id, author, title, subtitle, numEdition, publisher, created_at, updated_at, publication, Pag, Vol, Year } = req.body;
        console.log(req.body)

        if (!req.body) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const user = await ReferenciaSchema.updateOne({ id: req.body.id }, { $set: { author: req.body.author, title: req.body.title, subtitle: req.body.subtitle, numEdition: req.body.numEdition, publisher: req.body.publisher, publication: req.body.publication, updated_at: req.body.updated_at, Pag: req.body.Pag, Vol: req.body.Vol, Year: req.body.Year } })
            console.log(user)
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err })
        }
    }

    async list(req, res) {
        const user = await ReferenciaSchema.find({}, { id: 1, author: 1, title: 1, subtitle: 1, numEdition: 1, publisher: 1, created_at: 1, updated_at: 1, publication: 1, Pag: 1, Vol: 1, Year: 1 })

        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await ReferenciaSchema.deleteOne({ id: req.params.id })
        console.log(user)

        return res.status(200).json(user)

    }
}

module.exports = new ReferenciaController()