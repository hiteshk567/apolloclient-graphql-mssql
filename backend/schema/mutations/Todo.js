const { GraphQLID, GraphQLList, GraphQLString } = require("graphql");
const { Todo } = require("../typedefs/Todo");
let db = require("../../localdb");
const { v4: uuidv4 } = require("uuid");

exports.ADD_TODO = {
  type: GraphQLList(Todo),
  args: {
    description: { type: GraphQLString },
  },
  async resolve(parent, { description }) {
    const time = new Date().toISOString();
    const id = uuidv4();
    db.push({ id, creationTime: time, description, isCompleted: false });
    console.log(db);
    return db;
  },
};

exports.UPDATE_TODO = {
  type: new GraphQLList(Todo),
  args: {
    description: { type: GraphQLString },
    id: { type: GraphQLID },
  },
  async resolve(parent, { description, id }) {
    db.forEach((todo) => {
      if (todo.id === id) {
        todo.description = description;
      }
    });
    return db;
  },
};

exports.DELETE_TODO = {
  type: new GraphQLList(Todo),
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent, { id }) {
    try {
      console.log(id);
      db = [];

      // db.filter((item) => item.id !== id);
      return db;
    } catch (error) {
      console.log(error);
    }
  },
};

exports.TOGGLE_COMPLETED = {
  type: new GraphQLList(Todo),
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent, { id }) {
    db.forEach((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
    });
    return db;
  },
};
