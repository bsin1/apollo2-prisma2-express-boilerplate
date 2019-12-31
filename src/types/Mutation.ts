import { mutationType } from "nexus"

export const Mutation = mutationType({
    definition(t) {
        t.crud.createOneUser({ alias: 'signupUser' })
        t.crud.deleteOneConversation()
        t.crud.createOneMessage()
    },
})