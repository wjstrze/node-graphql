const mongoose = require("mongoose");
const { composeWithMongoose } = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const blog = new Schema(
  {
    id: String,
    name: String,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

module.exports = {
  BlogSchema: mongoose.model("Blog", blog),
  BlogTC: composeWithMongoose(mongoose.model("Blog", blog)),
};