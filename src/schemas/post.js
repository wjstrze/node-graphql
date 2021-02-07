const { PostTC, PostSchema } = require("../model/post");

// PostTC.addResolver({
//   name: "create",
//   kind: "mutation",
//   type: PostTC.getResolver("createOne").getType(),
//   args: PostTC.getResolver("createOne").getArgs(),
//   resolve: async ({ source, args, context, info }) => {
//     const post = await PostSchema.create(args.record);

//     return {
//       record: post,
//       recordId: PostTC.getRecordIdFn()(post),
//     };
//   },
// });

const PostQuery = {
  // postById: PostTC.getResolver("findById"),
  // postByIds: PostTC.getResolver("findByIds"),
  // postOne: PostTC.getResolver("findOne"),
   postMany: PostTC.mongooseResolvers.findMany(),
  // postCount: PostTC.getResolver("count"),
  // postConnection: PostTC.getResolver("connection"),
  // postPagination: PostTC.getResolver("pagination"),
};

const PostMutation = {
  // postWithFile: PostTC.getResolver("create"),
   postCreateOne: PostTC.mongooseResolvers.createOne()
  // postCreateMany: PostTC.getResolver("createMany"),
  // postUpdateById: PostTC.getResolver("updateById"),
  // postUpdateOne: PostTC.getResolver("updateOne"),
  // postUpdateMany: PostTC.getResolver("updateMany"),
  // postRemoveById: PostTC.getResolver("removeById"),
  // postRemoveOne: PostTC.getResolver("removeOne"),
  // postRemoveMany: PostTC.getResolver("removeMany"),
};

module.exports = { PostQuery: PostQuery, PostMutation: PostMutation };