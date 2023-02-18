const express = require('express');
const colors = require("colors");
const cors = require("cors");

const port = 3000;
const connectDB = require("./models/db");
const routes = require("./router/api");
connectDB();
const app = express();


app.get("/", function (request, response) {
    response.sendFile("home.html", { root: __dirname });
  });
  
  // adding api routes
  app.use("/api", routes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  }
);



