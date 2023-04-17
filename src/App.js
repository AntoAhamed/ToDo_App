import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Todos from './Components/Todos'
import AddTodos from './Components/AddTodos';
import Footer from './Components/Footer';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addTodo = () => {
    if (title.length > 0 && desc.length > 0) {
      let sno;
      if (todos.length === 0) {
        sno = 0;
      }
      else {
        sno = todos[todos.length - 1].sno;
      }
      let myTodo = {
        sno: sno + 1,
        title: title,
        desc: desc
      }

      setTodos([...todos, myTodo]);
      setTitle('');
      setDesc('');

      localStorage.setItem("todos", JSON.stringify(todos));
    }
    else {
      alert("Title or Description can't be blank");
    }
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    )

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className='App'>
      <Navbar />
      <AddTodos title={title} desc={desc} setTitle={setTitle} setDesc={setDesc} addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
