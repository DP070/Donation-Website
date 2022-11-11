import { ObjectId } from "mongodb"
import { getMongoCollection } from "./mongodb"

const DB_NAME = "hack403"
const COLLECTION_NAME = "armazem"

//adiciona roupa
async function insereRoupa(roupa) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne(roupa)).insertedId

}
async function insereRoupaEmPedido(roupaId, pedidoId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.updateOne({ _id: ObjectId(roupaId) }, { $set: { pedidoId: ObjectId(pedidoId) } })

}



async function insereRoupas(roupas) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertMany(roupas))

}

//mostra a roupa pelo do Id
async function mostraRoupaPeloId(roupaId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: ObjectId(roupaId) })

}

//mostra todas as roupas
async function mostraRoupas() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()
}

export {
    insereRoupa,
    insereRoupas,
    mostraRoupas,
    insereRoupaEmPedido,
    mostraRoupaPeloId
}