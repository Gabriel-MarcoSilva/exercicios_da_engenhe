const CompetidorSchema = require("../../database/CompetidorSchema")

class CompetidorController {
    async create(req, res) {
        const { id, nomeCompetidor, equipe, modalidade, ranking, nomeRobo, linkGif, linkRobo, instituicao} = req.body;
        console.log(req.body)
        if (!id || !nomeCompetidor || !equipe || !modalidade || !ranking || !nomeRobo || !linkGif || !linkRobo || !instituicao) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const result = await CompetidorSchema(req.body).save()
            console.log("cadastrado com sucesso")
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem", err })
        }
    }

    async edit(req, res) {

        const { id, nomeCompetidor, equipe, modalidade, ranking, nomeRobo, linkGif, linkRobo, instituicao} = req.body;
        console.log(req.body)

        if (!id || !nomeCompetidor || !equipe || !modalidade || !ranking || !nomeRobo || !linkGif || !linkRobo || !instituicao) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const user = await CompetidorSchema.updateOne({ id: req.body.id }, { $set: { nomeCompetidor: req.body.nomeCompetidor, equipe: req.body.equipe, modalidade: req.body.modalidade, ranking: req.body.ranking, nomeRobo: req.body.nomeRobo, instituicao: req.body.instituicao, linkRobo: req.body.linkRobo} })
            console.log(user)
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err })
        }
    }

    async list(req, res) {
        const user = await CompetidorSchema.find({}, { id: 1, nomeCompetidor: 1, equipe: 1, modalidade: 1, ranking: 1, nomeRobo: 1, linkGif: 1, linkRobo: 1, instituicao: 1 })

        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await CompetidorSchema.deleteOne({ id: req.params.id })
        console.log(user)

        return res.status(200).json(user)

    }
}

module.exports = new CompetidorController()