import { Roupas } from "../assets/roupas";
import {
    insereRoupa,
    mostraRoupas,
    mostraRoupaPeloId,
    insereRoupas,
    insereRoupaEmPedido,
} from "../data/armazem";

export async function adicionarRoupasIniciais() {
    await insereRoupas(Roupas)
}

//adicionar uma roupa a base de dados
async function adicionarRoupa(pathToImage, tamanho, categoria, genero) {
    const roupa = await insereRoupa({
        pathToImage,
        tamanho,
        categoria,
        genero
    })
    return roupa
}

async function adicionarRoupaAPedido(roupaId, pedidoId) {
    const roupa = await insereRoupaEmPedido(roupaId, pedidoId)
    return roupa
}

//mostrar todas as roupas
async function mostraTodasRoupas() {
    const roupas = await mostraRoupas()
    if (roupas == undefined) {
        return "Nenhuma roupa disponível."
    }
    return roupas
}

//mostrar uma roupa com o id correspondente 
async function apresentaRoupa(idRoupa) {
    const umaRoupa = await mostraRoupaPeloId(idRoupa)
    if (umaRoupa === undefined) {
        return "Roupa não encontrada."
    }
    return umaRoupa
}



export {
   adicionarRoupa,
   mostraTodasRoupas,
   apresentaRoupa,
   adicionarRoupaAPedido
}