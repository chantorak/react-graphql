"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("./schema");
const yoga = (0, graphql_yoga_1.createYoga)({
    schema: schema_1.schema,
    cors: {
        origin: '*',
        credentials: true,
    },
    logging: true
});
const server = (0, node_http_1.createServer)(yoga);
server.listen(4000, '127.0.0.1', () => {
    console.info('Server is running on http://localhost:4000/graphql');
});
