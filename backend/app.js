require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const sql = require("mssql");
const config = require("./config");
const cors = require("cors");

const MySchema = require("./schema");

const app = express();
app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: MySchema,
    graphiql: true,
  })
);

app.listen("5000", () => {
  console.log("Server is running on port 5000");
});
