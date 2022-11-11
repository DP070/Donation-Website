const { ObjectId } = require("mongodb")

const { getMongoCollection } = require("./mongodb")

const DB_NAME = "hack403"
const COLLECTION_NAME = "session"

//Cria o token
async function addSession(userId) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return (await collection.insertOne({ userId })).insertedId
}

//Verificar qual o token definido
async function getSessionByToken(token) {
    if (!ObjectId.isValid(token)) return null
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(token) })
}

export {
    addSession,
    getSessionByToken
}