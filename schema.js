const axios = require('axios');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLList, GraphQLSchema } = require('graphql');

// Primary Data Query
const DataResponseType = new GraphQLObjectType({
    name: "Data",
    fields: () => ({
        data: {type: new GraphQLList(SearchResponseType)},
        pagination: {type: PaginationType},
        meta: {type: MetaType}
    })
})

const SearchResponseType = new GraphQLObjectType({
    name: 'Search',
    fields: () => ({
        id: {type: GraphQLString},
        title: {type: GraphQLString},
        url: {type: GraphQLString},
        embed_url: {type: GraphQLString}, 
    })
});

const PaginationType = new GraphQLObjectType({
    name: 'Pagination',
    fields: () => ({
        total_count: {type: GraphQLInt},
        count: {type: GraphQLInt},
        offset: {type: GraphQLInt}
    })
})

const MetaType = new GraphQLObjectType({
    name: 'Meta',
    fields: () => ({
        status: {type: GraphQLInt},
        msg: {type: GraphQLString},
        response_id: {type: GraphQLString}
    })
})

// Root Query 
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        data: {
            type: DataResponseType,
            resolve(parent, args) {
                return axios.get("https://api.giphy.com/v1/gifs/search?api_key=t4HfXGHIt2uMBoaMk25K5LToS1pLu7E8&q=Synths&limit=2&offset=0&rating=G&lang=en")
                            .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
