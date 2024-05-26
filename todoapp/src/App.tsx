import React from 'react';
import './App.css';
import TodoApp from './Components/TodoApp';
import { FC } from 'react';

const App: FC = () => {
  return (
    <>
      <h1>TODO List</h1>
      <TodoApp />
    </>
  );  
}

export default App;