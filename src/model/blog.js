const mongoose = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");
 
const { PostTC } = require("./post");

const BlogSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const BlogModel = mongoose.model("Blog", BlogSchema)
const BlogTC = composeMongoose(BlogModel)

BlogTC.addRelation(
  'posts',
  {
    resolver: () => PostTC.mongooseResolvers.findMany(),
    prepareArgs: {
      filter: source => ({
        _operators:{
          postBlogId:{
            in: source._id
          }
        }
      })
    },
  }
);

module.exports = {
  BlogModel,
  BlogTC,
  BlogSchema
};