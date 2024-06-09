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
    <div className="flex justify-center items-center bg-black border-4 text-white min-w-64 max-w-64">
      <h1 className=''>TodoList</h1>
      <div className=''>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={todoText}
        onChange={handleInputChange}
        onKeyDown={handleKeyAddTodo}
      />
      <button onClick={handleAddTodo} className='outline-2'>Add Todo</button>
      </div>
      <div>
        <ul className="flex-col">
          {todos.map((todo) => (
            <li key={todo.index} onClick={() => handleDeleteTodo(todo.index)} className="hover:line-through">{"•" + todo.text}</li>
          ))}
        </ul>
        </div>  
      </div>
  );
};

export default AddTodo;
