const mongoose = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");

const { BlogSchema } = require("./blog");

 const PostSchema = new mongoose.Schema(
  {
    title: String,
    postBlogId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
    blog: {
    type: [BlogSchema], 
  },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
 );

const PostModel = mongoose.model("Post", PostSchema)
 const PostTC = composeMongoose(PostModel)

module.exports = {
  PostModel,
  PostTC,
  PostSchema
};