import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema'

const yoga = createYoga({
  schema,
  cors: {
    origin: '*', // or specify allowed origins
    credentials: true,
  },
  logging: true
})
const server = createServer(yoga)

server.listen(4000, '127.0.0.1', () => {
  console.info('Server is running on http://localhost:4000/graphql')
})