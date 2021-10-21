const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a todo
app.post("/todos", async (req, res) => {
  try {
    // console.log(req.body);
    const { description } = req.body;
    // const { description } = "I NEED TO CLEAN MY CAR";
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//get a todo

//update a todo

//delete a todo

//CONNECTION TEST

app.listen(5000, () => {
  console.log("SERVER STARTED AT PORT 5000");
});
pool.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("# DATABASE CONNECTED #");
  }
});
