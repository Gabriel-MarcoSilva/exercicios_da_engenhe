const BatalhaCodeSchema = require("../../database/BatalhaCodeSchema")

class BatalhaCodeController {
    async create(req, res) {
        const { comp1, comp2 } = req.body;
        console.log(req.body)
        if ( !comp2 || !comp1) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const result = await BatalhaCodeSchema(req.body).save()
            console.log("cadastrado com sucesso")
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem", err })
        }
    }

    // async edit(req, res) {

    //     const { _id, pontuacao} = req.body;
    //     console.log(req.body)

    //     if (!_id || !pontuacao) {
    //         return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
    //     }

    //     try {
    //         const user = await BatalhaCodeSchema.updateOne({ _id: req.body._id }, { $set: { pontuacao: req.body.pontuacao} })
    //         console.log(user)
    //         return res.status(200).json(user)
    //     } catch (err) {
    //         return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err })
    //     }
    // }

    async list(req, res) {
        const user = await BatalhaCodeSchema.find({}, { comp1: 1, comp2: 1})

        return res.status(200).json(user)
    }

    async byId(req, res){
        const user = await BatalhaCodeSchema.findOne({ _id: req.params._id})
        console.log(user)
        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await BatalhaCodeSchema.deleteOne({ _id: req.params._id })
        console.log(user)
        return res.status(200).json(user)
    }
}

module.exports = new BatalhaCodeController()