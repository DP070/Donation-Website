import { adicionarRoupa, adicionarRoupaAPedido } from "../../../scr/services/armazem";
import { mostraPedidoPeloId } from "../../../scr/services/pedido";

export default async (req, res) => {
    if (req.method === "GET") {

        const pedidoId = req.query.id
        const pedido= await mostraPedidoPeloId(pedidoId)
        if (pedido) {
            res.status(200).json(pedido)
            return
        } else {
            res.status(404).json({"message": "Pedido não encontrado."})
            return
        }
    }else if(req.method === "POST") {
        const roupasPedido = await adicionarRoupaAPedido(req.body.roupaId, req.body.pedidoId)
        res.status(200).json(roupasPedido)
        return
    }  
}
