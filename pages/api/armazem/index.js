import { mostraTodasRoupas } from "../../../scr/services/armazem"

export default async function handler (req, res){ 
    if (req.method === "GET") { 
        const armazem = await mostraTodasRoupas()
        res.status(200).json(armazem)
        return
    } 
}
