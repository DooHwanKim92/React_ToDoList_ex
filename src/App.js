import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {


  const [toDoList, setToDoList] = useState([
    {text:"toDo-1"},
    {text:"toDo-2"},
    {text:"toDo-3"}
  ]);


  const onInsert = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, {text: e.target.text.value}])
  }



  return (
    <div className="App">
      <nav><h1>ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</h1></nav>
      <form onSubmit={onInsert}>
        <input name="text" /><button type='submit'>enter</button>
      </form>
      <ul>
        {toDoList.map(toDoList => <li><input type='checkbox'/>{toDoList.text}<button>delete</button></li>)}
      </ul>
    </div>
  );
}

export default App;