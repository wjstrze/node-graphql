const { SchemaComposer } = require('graphql-compose');
const { BlogMutation, BlogQuery } = require ('./blog');
const { PostMutation, PostQuery } = require ('./post');

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
    ...BlogQuery,
    ...PostQuery,
});

schemaComposer.Mutation.addFields({
    ...BlogMutation,
    ...PostMutation,
});

module.exports = schemaComposer.buildSchema();