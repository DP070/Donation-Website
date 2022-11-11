import { getSessionByToken } from "../data/sessions";
import {
    getUserByEmail,
    addUser,
    checkIfEmailExists,
    getUserById
} from "../data/user";


//verificar email
async function verifyEmail(email) {
    const user = await checkIfEmailExists(email)
    return user !== null
}

//Criar user
async function newUser(dados) {
    const user = await addUser(
        dados)
    return user
}

//Verifica email e retorna user
async function valideUser(email) {
    const user = await getUserByEmail(email)
    return user
}

//Encontra o user pelo token
async function findUserByToken(token) {
    const session = await getSessionByToken(token)

    if (!session) {
        //erro
        return undefined
    } else {
        return await getUserById(session.userId)
    }

}

export {
    verifyEmail,
    newUser,
    valideUser,
    findUserByToken
}