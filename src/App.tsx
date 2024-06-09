import React from 'react';
import './App.css';
import Todolist from './Components/Todolist';
// import AddTodo from './Components/Addtodo';


const App: React.FC = () => {
  return (
    <>
      {/* <AddTodo /> */}
      <Todolist />
    </>
  );  
}

export default App;