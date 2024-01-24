import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { TodoModel } from "./model";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState<string>(""); // This state variable will hold the value of the input field (the todo)
  const [todos, setTodos] = useState<TodoModel[]>([]); // This state variable will hold the list of todos (array of objects)

  function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent the page from reloading

    if (todo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.floor(Math.random() * 1000) + 1, todo: todo, isDone: false },
      ]); // Add the new todo to the todos array (spread operator)
      setTodo(""); // Clear the input field
    }

    console.log(todos); // debug
  }

  return (
    <div>
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
