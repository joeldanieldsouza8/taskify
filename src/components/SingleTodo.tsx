import { TodoModel } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import "./SingleTodo.css";
import { useEffect, useRef, useState } from "react";
import { Action } from "../reducer/todoReducer";

interface SingleTodoProps {
  todo: TodoModel; // The todo object
  //   setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>; // The setter function for the todos array
  dispatch: React.Dispatch<Action>;
}

function SingleTodo({ todo, dispatch }: SingleTodoProps) {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  function handleDoneTodo(id: number) {
    // Find the todo with the given id and toggle its isDone property (true/false) and update the todos array
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );

    dispatch({ type: "COMPLETED", payload: id });
  }

  function handleDeleteTodo(id: number) {
    // Filter out the todo with the given id and update the todos array
    // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

    dispatch({ type: "DELETE", payload: id });
  }

  function handleEditTodo(id: number) {
    if (edit) {
      // If the edit mode is on, update the todo with the given id and update the todos array
      //   setTodos((prevTodos) =>
      //     prevTodos.map((todo) =>
      //       todo.id === id ? { ...todo, todo: editTodo } : todo
      //     )
      //   );

      dispatch({ type: "UPDATE", payload: { id, todo: editTodo } });
    }

    setEdit((prevEdit) => !prevEdit); // Toggle the edit mode
  }

  function handleSetEditTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setEditTodo(e.target.value); // Update the editTodo state variable with the new value from the input field
  }

  function handleUpdateTodo(e: React.FormEvent<HTMLFormElement>, id: number) {
    e.preventDefault(); // Prevent the page from reloading

    // Update the todo with the given id and update the todos array
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) =>
    //     todo.id === id ? { ...todo, todo: editTodo } : todo
    //   )
    // );

    dispatch({ type: "UPDATE", payload: { id, todo: editTodo } });

    setEdit((prevEdit) => !prevEdit); // Toggle the edit mode
  }

  const inputRef = useRef<HTMLInputElement>(null); // Create a reference to the input field (the todo) to focus on it when the edit mode is on (when the edit button is clicked)

  // We use the useEffect hook to focus on the input field when the edit mode is on
  useEffect(() => {
    if (edit) {
      inputRef.current?.focus(); // Focus on the input field when the edit mode is on
    }
  }, [edit]);

  return (
    <form
      className="single-form"
      onSubmit={(e) => handleUpdateTodo(e, todo.id)}
    >
      {edit ? (
        <input
          type="text"
          className="single-input"
          value={editTodo}
          onChange={handleSetEditTodo}
          ref={inputRef} // Set the reference to the input field (the todo)
        />
      ) : (
        <p className={`single-p ${todo.isDone ? "done" : ""}`}>{todo.todo}</p>
      )}

      <div>
        <span
          className="todos-single-btn"
          onClick={() => handleEditTodo(todo.id)}
        >
          <AiFillEdit />
        </span>

        <span
          className="todos-single-btn"
          onClick={() => handleDoneTodo(todo.id)}
        >
          <MdDone />
        </span>

        <span
          className="todos-single-btn"
          onClick={() => handleDeleteTodo(todo.id)}
        >
          <AiFillDelete />
        </span>
      </div>
    </form>
  );
}

export default SingleTodo;
