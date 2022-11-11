import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "hack403"
const COLLECTION_NAME = "pedidos"


//adiciona pedido à base de dados
async function inserePedido(pedido) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(pedido)).insertedId

}

//mostra pedido pelo id getClothingByID
async function apresentaPedidoPeloId(pedidoId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: ObjectId(pedidoId) })

}

//mostra todas os pedidos getAllClothing
async function mostraPedidos() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()
}


export {
    inserePedido,
    mostraPedidos,
    apresentaPedidoPeloId
}