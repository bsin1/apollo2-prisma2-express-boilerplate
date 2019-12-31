import "./config/env"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import { schema } from "./schema"
import { createContext } from "./config/context"

const isProduction = process.env.NODE_ENV === "production"
const port = isProduction ? process.env.PORT : 3000

const app = express()
const server = new ApolloServer({ schema, context: createContext })
server.applyMiddleware({ app })

app.listen(port, () => {
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
})
