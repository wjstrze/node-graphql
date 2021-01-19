const mongoose = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const post = new Schema(
  {
    id: String,
    title: String,
    blog: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
    
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
  PostSchema: mongoose.model("Post", post),
  PostTC: composeWithMongoose(mongoose.model("Post", post)),
};