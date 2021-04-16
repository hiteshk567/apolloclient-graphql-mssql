const { GraphQLSchema, GraphQLObjectType } = require("graphql");
const { GET_ALL_TODOS } = require("./queries/Todo");
const {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_COMPLETED,
  UPDATE_TODO,
} = require("./mutations/Todo");

const itemArray = [{ name: "eat" }, { name: "sleep" }];

// module.exports = buildSchema(`
// type Post {
//     name: String!
// }

// type Query {
//     getPosts: [Post]
// }
// type Mutation {
//     putPost: [Post]
// }
// `);

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllTodos: GET_ALL_TODOS,
  },
});

const Mutations = new GraphQLObjectType({
  name: "Mutations",
  fields: {
    addNewTodo: ADD_TODO,
    updateTodo: UPDATE_TODO,
    deleteTodo: DELETE_TODO,
    toggleCompleted: TOGGLE_COMPLETED,
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations,
});
