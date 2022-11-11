import {
    addSession,
    getSessionByToken
} from "../data/sessions";

//Criar um token
async function newToken(userId) {
    const sessao = addSession(userId)
    return sessao

}

//verificar qual a corrêspondencia do token definido
async function findIdByToken(token) {
    const id = getSessionByToken(token)
    return id

}

export {
    newToken,
    findIdByToken
}