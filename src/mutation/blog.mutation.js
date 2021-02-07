const faker = require("faker");
const { BlogModel, BlogTC } = require("../model/blog");

const resolver = function () {};
resolver.fakeData = BlogTC.addResolver({
  name: "Blog",
  type: BlogTC,
  args: { record: BlogTC.getInputType() },
  resolve: async ({ source, args }) => {
    const blog = new BlogModel({
        id: faker.random.uuid(),
        name: faker.name.firstName()
    //   name: faker.name.findName(),
    //   email: faker.internet.email(),
    //   phone: faker.phone.phoneNumber(),
    //   profileImage: faker.random.image(),
    });
    return await blog.save();
  },
});

module.exports = resolver;