import { inputObjectType } from "nexus"

export const UserCreateInput = inputObjectType({
  name: "UserCreateInput",
  definition(t) {
    t.string("email", { required: true })
    t.string("name")
    t.string("password", { required: true })
  }
})
