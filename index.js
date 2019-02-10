const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema');

app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(4000, () => {
    console.log('listening on port 4000');
});