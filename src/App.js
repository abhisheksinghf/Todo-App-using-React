import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import React, {useState} from 'react';

function App() {

  const onDelete = (todo) => { 
    console.log('I am on ondelete ', todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }


const [todos, setTodos] = useState([
    {
      sno1: 1,
      title: "Go to market",
      desc: "buy some milk, grocery"
    },
    
    {
      sno1: 2,
      title: "Solve coding questions",
      desc: "on arrays, linked list, stack"
    },
    {
      sno1: 3,
      title: "prepare resume",
      desc: "use canva to do so"
    },
  ]);
  return (
    <>
      <Header searchBar={false}/>
      <AddTodo />
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default App;
