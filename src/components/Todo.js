import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  let [todoList, setTodoList] = useState([]);
  const [todoShow, setTodoShow] = useState("all");
  const [allComplete, setAllComplete] = useState(true);
  const addToDo = (todo) => {
    setTodoList([todo, ...todoList]);
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const updateTodoShow = (s) => {
    setTodoShow(s);
  };
  if (todoShow === "active") {
    todoList = todoList.filter((todo) => !todo.complete);
  } else if (todoShow === "complete") {
    todoList = todoList.filter((todo) => todo.complete);
  }

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  const removeCompleted = () => {
    setTodoList(todoList.filter((todo) => !todo.complete));
  };

  const allCompleted = () => {
    setTodoList(
      todoList.map((todo) => ({
        ...todo,
        complete: allComplete,
      }))
    );
    setAllComplete(!allComplete);
  };
  return (
    <div className="container">
      <TodoForm onSubmit={addToDo} />
      {todoList.map((todo) => {
        return (
          <TodoList
            key={todo.id}
            todo={todo}
            onDelete={() => handleDelete(todo.id)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        );
      })}
      <div className="d-f">
        <button
          className="update-btn btn"
          onClick={() => updateTodoShow("all")}
        >
          All
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoShow("active")}
        >
          Active
        </button>
        <button
          className="update-btn btn"
          onClick={() => updateTodoShow("complete")}
        >
          Complete
        </button>
      </div>
      <button className="all-btn btn" onClick={() => removeCompleted()}>
        Remove All Completed Tasks
      </button>
      <button className="all-btn btn" onClick={allCompleted}>
        Toggle All Complete : {`${allComplete}`}
      </button>
    </div>
  );
};

export default Todo;
