const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { setupSwagger } = require("./swagger/swagger");
const studentsRoutes = require("./routes/students.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.get("/health", (req, res) => {
  res.json({ success: true, message: "API is running" });
});

app.use("/api/students", studentsRoutes);

const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);



module.exports = app;
