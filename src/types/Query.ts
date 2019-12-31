import { queryType } from "nexus"

export const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.message()
    t.crud.conversation()
  }
})
