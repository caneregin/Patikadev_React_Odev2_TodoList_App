import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import { useEffect, useState } from 'react';


function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    console.log(todos)
  }, [todos])
  return (
    <div id="container" className='App'>
      <h1>TO DO</h1>
      <Form addTodos={setTodos} todos={todos} />
      <List updateTodos={setTodos} todos={todos}/>
      
    </div>
  );
}

export default App;
