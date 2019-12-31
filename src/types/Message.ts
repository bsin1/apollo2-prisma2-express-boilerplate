import { objectType } from 'nexus'

export const Message = objectType({
    name: 'Message',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.message()
        t.model.author()
    },
})