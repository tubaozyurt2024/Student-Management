const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student CRUD API",
      version: "1.0.0",
      description: "Student Management REST API with SQL Server",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJSDoc(options);
