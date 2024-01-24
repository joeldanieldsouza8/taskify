// InputField.tsx
import "./InputField.css";

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void; // This is a function that takes no arguments and returns nothing
}

function InputField({ todo, setTodo, handleAddTodo }: InputFieldProps) {
  function handleSetTodo(e: React.ChangeEvent<HTMLInputElement>) {
    // e.preventDefault();
    setTodo(e.target.value);
    // console.log(todo); // debug
  }

  return (
    <div className="form-container">
      <form onSubmit={handleAddTodo}>
        <input
          className="search-box"
          type="text"
          placeholder="Add a task"
          value={todo}
          onChange={handleSetTodo}
        />
        <button className="submit-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default InputField;
