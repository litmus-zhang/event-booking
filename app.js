const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const mongoose = require('mongoose');
const isAuth = require('./middleware/is-auth');


const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) =>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS')
    { 
        return res.sendStatus(200);
    }
    next();
    
})


app.use(isAuth);


app.use('/graphql', graphqlHTTP({
    schema: graphQlSchema ,
    rootValue: graphQlResolvers,
    graphiql: true,
}));

const startServer = async () =>
{
    try {
        mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.mjzebro.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`)
        app.listen(4000, () =>
    {
        console.log('Server started on port 4000');
     });
    } catch (error) {
    console.log(error);
    }
 }

startServer();
