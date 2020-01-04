import { mutationType, arg } from "nexus"
import { UserCreateInput } from "./inputs/UserCreateInput"
import { compare, hash } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { AuthPayload } from "./AuthPayload"
import { UserLoginInput } from "./inputs/UserLoginInput"

export const Mutation = mutationType({
  definition(t) {
    t.crud.deleteOneConversation()
    t.crud.createOneMessage()
    t.field("loginUser", {
      type: AuthPayload,
      args: {
        data: arg({ type: UserLoginInput, required: true })
      },
      resolve: async (_, { data }, context) => {
        const user = await context.photon.users.findOne({
          where: {
            email: data.email
          }
        })
        if (!user) {
          throw new Error("User does not exist")
        }

        const validPassword = await compare(data.password, user.password)
        if (!validPassword) {
          throw new Error("Invalid password")
        }

        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET as string),
          user
        }
      }
    })
    t.field("registerUser", {
      type: AuthPayload,
      args: {
        data: arg({ type: UserCreateInput, required: true })
      },
      resolve: async (_, { data }, context) => {
        data.password = await hash(data.password, 10)
        const user = await context.photon.users.create({
          data: data
        })
        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET as string),
          user
        }
      }
    })
  }
})
