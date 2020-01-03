import { mutationType, arg } from "nexus"
import { UserCreateInput } from "./UserCreateInput"
import { User } from "./User"
import bcrypt from "bcryptjs"

export const Mutation = mutationType({
  definition(t) {
    t.crud.deleteOneConversation()
    t.crud.createOneMessage()
    t.field("registerUser", {
      type: User,
      args: {
        data: arg({ type: UserCreateInput, required: true })
      },
      resolve: async (_, { data }, context) => {
        data.password = await bcrypt.hash(data.password, 10)
        return context.photon.users.create({
          data: data
        })
      }
    })
  }
})
