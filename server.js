const express = require("express");
const app = express();
const { db } = require("./db");
const usersRouter = require("./routes/users");
const showsRouter = require("./routes/shows");
const seed = require("./seed");
const port = 3001;

app.use(express.json());
app.use("/shows", showsRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  //   seed();
  console.log(`Server running on ${port}`);
});
