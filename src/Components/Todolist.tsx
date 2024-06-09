import React, { useState, FC, useEffect} from 'react';

interface Todo {
  text: string;
  complete: boolean;
  index: number;
}

const AddTodo: FC = () => {
  const [todoText, setTodoText] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoText(e.target.value);
    };
  
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    const todosArray = storedTodos ? JSON.parse(storedTodos) : [];
    setTodos(todosArray);
  }, []);

    const handleAddTodo = () => {
      if (todoText.trim()) {
          const newIndex = todos.length + 1;
          setTodos((prevTodos) => [
            ...prevTodos,
            { text: todoText, complete: false, index: newIndex },
          ]);
        localStorage.setItem('todos', JSON.stringify(todos));
        setTodoText('');
        }
    };

    const handleKeyAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        if (todoText.trim()) {
          setTodos((prevTodos) => [
            ...prevTodos,
            { text: todoText, complete: false, index: todos.length + 1 },
          ]);
          localStorage.setItem('todos', JSON.stringify(todos));
          setTodoText('');
        }
      }
    }
          
      const handleDeleteTodo = (index: number) => {
      const newTodos = todos.filter((l) => l.index !== index);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setTodos(newTodos);
    };

  return (
    <div className="addTodo">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={todoText}
        onChange={handleInputChange}
        onKeyDown={handleKeyAddTodo}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
        <ul className="">
        {todos.map((todo) => (
          <li key={todo.index} onClick={() => handleDeleteTodo(todo.index)} className="hover:line-through">{"•" + todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;
