import { adicionarRoupasIniciais } from "../../scr/services/armazem"

export default async function (req, res) {
    await adicionarRoupasIniciais()
    res.status(200).json({message: 'ok'})
}