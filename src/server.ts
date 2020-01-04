import "./config/env"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { schema as baseSchema } from "./schema/schema"
import { createContext } from "./config/context"
import { permissions } from "./schema/permissions"
import { applyMiddleware } from "graphql-middleware"

const isProduction = process.env.NODE_ENV === "production"
const port = isProduction ? process.env.PORT : 3000

const app = express()
const schema = applyMiddleware(baseSchema, permissions)

const server = new ApolloServer({
  context: ({ req }) => {
    return createContext(req)
  },
  schema
})
server.applyMiddleware({ app })

app.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
})
