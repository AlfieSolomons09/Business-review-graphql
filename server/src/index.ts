import {ApolloServer} from 'apollo-server'
import { resolvers } from './graphql/resolvers/resolver.js'
import { db } from './database/database.js'
import {graphQLSchema} from './graphql/schema/schema.js'

const server = new ApolloServer({
    typeDefs:graphQLSchema,
    resolvers,
    context: {db}
})

server.listen().then(({url})=>{
    console.log(`server is ready at ${url}`)
})