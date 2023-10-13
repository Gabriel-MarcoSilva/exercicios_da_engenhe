const CorridaFollowSchema = require("../../database/CorridaFollowSchema")

class CorridaFollowController {
    async create(req, res) {
        const { comp1 } = req.body;
        console.log(req.body)
        if (!comp1) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const result = await CorridaFollowSchema(req.body).save()
            console.log("cadastrado com sucesso")
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem", err })
        }
    }

    async edit(req, res) {

        const { comp1, tempo} = req.body;
        console.log(req.body)

        if (!comp1 || !tempo) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const user = await CorridaFollowSchema.updateOne({ _id: req.params._id }, { $set: { comp1: req.body.comp1, tempo: req.body.tempo} })
            console.log(user)
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err })
        }
    }

    async list(req, res) {
        const user = await CorridaFollowSchema.find({}, { comp1: 1, tempo: 1 })

        return res.status(200).json(user)
    }

    async byId(req, res) {
        const user = await CorridaFollowSchema.findOne({ _id: req.params._id })
        console.log(user)
        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await CorridaFollowSchema.deleteOne({ _id: req.params._id })
        console.log(user)
        return res.status(200).json(user)
    }

    async deleteAll(req, res) {
        const user = await CorridaFollowSchema.deleteMany({})
        console.log(user)
        return res.status(200).json(user)
    }
}

module.exports = new CorridaFollowController()