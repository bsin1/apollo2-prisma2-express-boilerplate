import { queryType, stringArg } from "nexus"
import { User } from "./User"

export const Query = queryType({
  definition(t) {
    t.crud.user()
    t.crud.message()
    t.crud.conversation()
    t.field("checkUser", {
      type: "String",
      nullable: true,
      resolve: (r, a, context, i) => {
        return "Hello World"
      }
    })
  }
})
