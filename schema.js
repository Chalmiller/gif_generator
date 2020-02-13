const axios = require('axios');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

// Primary Data Query
const GiphyResponseType = new GraphQLObjectType({
    name: 'Data',
    fields: () => ({
        data: {
            type: new GraphQLList(GifDataType)
        }
    })
});

// GifDataType
const GifDataType = new GraphQLObjectType({
    name: 'GifInfo',
    fields: () => ({
        id: {
            type: GraphQLString
        }
    })
})
