import React, { useState } from 'react';

interface Todo {
  text: string;
  complete: boolean;
}


const AddTodo: React.FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: todoText, complete: false },
      ]);
      setTodoText('');
    }
  };

  return (
    <div className="addTodo">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={todoText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
