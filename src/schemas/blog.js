const { BlogTC } = require("../model/blog");
// require("../mutation/blog.mutation");

// BlogTC.addResolver({
//   name: "create",
//   kind: "mutation",
//   type: BlogTC.getResolver("createOne").getType(),
//   args: BlogTC.getResolver("createOne").getArgs(),
//   resolve: async ({ source, args, context, info }) => {
//     const blog = await BlogSchema.create(args.record);

//     return {
//       record: blog,
//       recordId: BlogTC.getRecordIdFn()(blog),
//     };
//   },
// });

const BlogQuery = {
  // blogById: BlogTC.getResolver("findById"),
  // blogByIds: BlogTC.getResolver("findByIds"),
  blogOne: BlogTC.mongooseResolvers.findOne(),
  blogMany: BlogTC.mongooseResolvers.findMany(),
  // blogCount: BlogTC.getResolver("count"),
   blogConnection: BlogTC.mongooseResolvers.connection()
  // blogPagination: BlogTC.getResolver("pagination"),
};

const BlogMutation = {
  // blogWithFile: BlogTC.getResolver("create"),
   blogCreateOne: BlogTC.mongooseResolvers.createOne(),
   blogCreateMany: BlogTC.mongooseResolvers.createMany()
  // blogUpdateById: BlogTC.getResolver("updateById"),
  // blogUpdateOne: BlogTC.getResolver("updateOne"),
  // blogUpdateMany: BlogTC.getResolver("updateMany"),
  // blogRemoveById: BlogTC.getResolver("removeById"),
  // blogRemoveOne: BlogTC.getResolver("removeOne"),
  // blogRemoveMany: BlogTC.getResolver("removeMany"),
  // fakeData: BlogTC.getResolver("Blog"),
};

module.exports = { BlogQuery: BlogQuery, BlogMutation: BlogMutation };