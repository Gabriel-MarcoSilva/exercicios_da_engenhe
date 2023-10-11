const CompetidorSchema = require("../../database/CompetidorSchema")

class CompetidorController {
    async create(req, res) {
        const { nomeCompetidor, equipe, modalidade, nomeRobo, linkGif, linkRobo, instituicao} = req.body;
        console.log(req.body)
        if ( !nomeCompetidor || !equipe || !modalidade || !nomeRobo || !linkGif || !linkRobo || !instituicao) {
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

        const { _id, nomeCompetidor, equipe, modalidade, nomeRobo, linkGif, linkRobo, instituicao} = req.body;
        console.log(req.body)

        if (!_id || !nomeCompetidor || !equipe || !modalidade || !nomeRobo || !linkGif || !linkRobo || !instituicao) {
            return res.status(500).json({ "message": "Campos obrigatórios faltam ser preenchidos" })
        }

        try {
            const user = await CompetidorSchema.updateOne({ _id: req.body._id }, { $set: { nomeCompetidor: req.body.nomeCompetidor, equipe: req.body.equipe, modalidade: req.body.modalidade, ranking: req.body.ranking, nomeRobo: req.body.nomeRobo, instituicao: req.body.instituicao, linkGif: req.body.linkGif, linkRobo: req.body.linkRobo, pontuacao: req.body.pontuacao, instagram: req.body.instagram, linkGifEquipe: req.body.linkGifEquipe} })
            console.log(user)
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ "message": "erro ao enviar mensagem:  " + err })
        }
    }

    async list(req, res) {
        const user = await CompetidorSchema.find({}, { _id: 1, nomeCompetidor: 1, equipe: 1, modalidade: 1, nomeRobo: 1, linkGif: 1, linkRobo: 1, instituicao: 1, pontuacao: 1, ranking: 1, instagram: 1, linkGifEquipe: 1})

        return res.status(200).json(user)
    }

    async byId(req, res){
        const user = await CompetidorSchema.findOne({ _id: req.params._id})
        console.log(user)
        return res.status(200).json(user)
    }

    async delete(req, res) {
        const user = await CompetidorSchema.deleteOne({ _id: req.params._id })
        console.log(user)

        return res.status(200).json(user)

    }
}

module.exports = new CompetidorController()