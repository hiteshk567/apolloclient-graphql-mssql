const mssql = require("mssql");
const { GraphQLList } = require("graphql");
const { Todo } = require("../typedefs/Todo");
let db = require("../../localdb");

exports.GET_ALL_TODOS = {
  type: new GraphQLList(Todo),
  async resolve() {
    return db;
  },
};
