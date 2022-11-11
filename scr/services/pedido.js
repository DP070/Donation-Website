import {
    inserePedido,
    mostraPedidos,
    apresentaPedidoPeloId,
} from "../data/pedido";


//adicionar um pedido
async function adicionarPedido({nome, telefone, morada, genero, tamanho}) {
    const pedido = await inserePedido({
            nome,
            telefone,
            morada,
            genero,
            tamanho,
            feitoA: new Date()
        })

    return pedido
}

//mostrar todos os pedidos
async function mostraTodosOsPedidos() {
    const pedidos = await mostraPedidos()
    if (pedidos === undefined) {
        return "Sem pedidos."
    }
    return pedidos
}

//mostrar um pedido pelo id
async function mostraPedidoPeloId(idPedido) {
    const pedidoUm = await apresentaPedidoPeloId(idPedido)
    if (pedidoUm === undefined) {
        return "Pedido não encontrado."
    }
    return pedidoUm
}

export{
    adicionarPedido,
    mostraTodosOsPedidos,
    mostraPedidoPeloId,
}