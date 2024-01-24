import { useState, useReducer } from "react";
import "./App.css";
import InputField from "./components/InputField";
// import { TodoModel } from "./model";
import TodoList from "./components/TodoList";
import { todoReducer } from "./reducer/todoReducer";

function App() {
  const [todo, setTodo] = useState<string>(""); // This state variable will hold the value of the input field (the todo)
  // const [todos, setTodos] = useState<TodoModel[]>([]); // This state variable will hold the list of todos (array of objects)

  const [todos, dispatch] = useReducer(todoReducer, []); // This state variable will hold the list of todos (array of objects)

  function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent the page from reloading

    if (todo) {
      // If the todo is not empty, add it to the todos array
      // setTodos((prevTodos) => [
      //   ...prevTodos,
      //   { id: prevTodos.length + 1, todo: todo, isDone: false },
      // ]);
      dispatch({ type: "ADD", payload: todo });
      setTodo(""); // Clear the input field
    }

    console.log(todos); // debug
  }

  return (
    <div>
      <h1 className="heading">Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
}

export default App;
