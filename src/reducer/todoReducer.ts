import { TodoModel } from "../model";

export type Action =
  | { type: "ADD"; payload: string }
  | { type: "DELETE"; payload: number }
  | { type: "COMPLETED"; payload: number }
  | { type: "UPDATE"; payload: { id: number; todo: string } };

// Define the reducer function
export function todoReducer(state: TodoModel[], action: Action): TodoModel[] {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      // { id: Math.floor(Math.random() * 1000) + 1, todo: todo, isDone: false },
      return [...state, { id: state.length + 1, todo: payload, isDone: false }];

    case "DELETE":
      // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      return state.filter((todo) => todo.id !== payload);

    case "COMPLETED":
      // setTodos((prevTodos) =>
      //   prevTodos.map((todo) =>
      //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      //   )
      // );
      return state.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "UPDATE":
      // setTodos((prevTodos) =>
      //   prevTodos.map((todo) =>
      //     todo.id === id ? { ...todo, todo: todoText } : todo
      //   )
      // );
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, todo: payload.todo } : todo
      );

    default:
      return state;
  }
}


