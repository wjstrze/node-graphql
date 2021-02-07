const mongoose = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");
 
const { PostSchema } = require("./post");

const BlogSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const BlogModel = mongoose.model("Blog", BlogSchema)
const BlogTC = composeMongoose(BlogModel)

module.exports = {
  BlogModel,
  BlogTC,
  BlogSchema
};