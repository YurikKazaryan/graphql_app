const { importSchema } = require('graphql-import')
const { makeExecutableSchema } = require('graphql-tools')

const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const schema = importSchema('src/schemas/query.graphql')

const resolvers = {
  Query,
  Mutation,
}

const server = new GraphQLServer({
  typeDefs: schema,
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})

const options = {
  //endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

server.start(options, () => console.log(`Server is running on http://localhost:4000`))
