const {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} = require("graphql");

exports.Todo = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    creationTime: { type: GraphQLString },
    isCompleted: { type: GraphQLBoolean },
  }),
});
