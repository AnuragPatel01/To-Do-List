import React, { useState } from "react";
import { Taskcard } from "./Card";
import { Click } from "./Button";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [tasks, setTasks] = useState("");

  const handleAddTodo = () => {
    if (tasks != "") {
      setTodos([...todos, tasks]);
      setTasks("");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: 'url("https://wallpaperaccess.com/full/637854.jpg")',
          justifyContent: "center",

          textAlign: "center",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            height: "85%",
            width: "30%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "30px",
            boxShadow: "2px 2px 3px white",
          }}
        >
          <h1 style={{ color: "#ffff00" }}>To-Do List</h1>
          <input
            style={{
              outline: "none",
              color: "blue",
              fontWeight: "550",
              padding: "10px",
              marginTop: "5px",
              marginBottom: "7px",
              borderRadius: "13px",
              border: "none",
              width: "130px",
              height: "20px",
            }}
            type="text"
            value={tasks}
            placeholder="Add a task..."
            onChange={(e) => setTasks(e.target.value)}
          />

          <Click buttoname="Add" onClick={handleAddTodo} />

          {todos.map((todo, ind) => (
            <Taskcard name={todo} key={ind + 1} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Todo;
