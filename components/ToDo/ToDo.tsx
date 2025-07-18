// components/Todo.tsx
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { addTodo, toggleTodo, deleteTodo } from "../../store/slices/todoSlice";

const Todo: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todo.items);

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h2>Todo List</h2>

      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите задачу"
        />
        <button onClick={handleAdd}>Добавить</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
