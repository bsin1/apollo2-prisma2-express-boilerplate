import { inputObjectType } from "nexus"

export const UserLoginInput = inputObjectType({
  name: "UserLoginInput",
  definition(t) {
    t.string("email", { required: true })
    t.string("password", { required: true })
  }
})
