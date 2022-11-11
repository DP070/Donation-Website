import { mostraTodosOsPedidos, adicionarPedido } from "../../../scr/services/pedido"

export default async function handler (req, res){ 
    if (req.method === "GET") { 
        const pedidos = await mostraTodosOsPedidos()
        res.status(200).json(pedidos)
        return
    } else if(req.method === "POST") {
        const pedidos = await adicionarPedido(req.body)
        res.status(200).json(pedidos)
        return
    }  
}

