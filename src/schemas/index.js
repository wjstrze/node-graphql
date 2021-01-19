const { SchemaComposer } = require( 'graphql-compose');


const schemaComposer = new SchemaComposer();

const { BlogMutation, BlogQuery } =require ('./blog');
const { PostMutation, PostQuery } =require ('./post');

schemaComposer.Query.addFields({
    ...BlogQuery,
    ...PostQuery,
});

schemaComposer.Mutation.addFields({
    ...BlogMutation,
    ...PostMutation,
});

module.exports = schemaComposer.buildSchema();