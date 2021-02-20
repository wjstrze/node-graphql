const mongoose = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");

const { BlogTC } = require("./blog.js");

 const PostSchema = new mongoose.Schema(
   {
    title: String,
    postBlogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog' },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
 );



const PostModel = mongoose.model("Post", PostSchema)
const PostTC = composeMongoose(PostModel)

PostTC.addRelation(
  'blog',
  {
    resolver: () => BlogTC.mongooseResolvers.findById(),
    prepareArgs: {
     _id: source => source.postBlogId
    },
  }
);

module.exports = {
  PostModel,
  PostTC,
  PostSchema
};