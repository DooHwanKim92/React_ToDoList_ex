import './App.css';
import { useCallback, useRef, useState } from 'react';

function App() {

  let textId = useRef(4);

  const [toDoList, setToDoList] = useState([
    {id:1,text:"toDo-1"},
    {id:2,text:"toDo-2"},
    {id:3,text:"toDo-3"}
  ]);

  const onInsert = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, {id:textId.current,text: e.target.text.value}]);
    textId.current++;
  }

  const onRemove = (id) => {
      setToDoList(toDoList.filter((toDoList => toDoList.id !== id)))
    }

  return (
    <div className="App">
      <nav><h1>React ToDoList</h1></nav>
      <form onSubmit={onInsert}>
        <input name="text" /><button type='submit'>enter</button>
      </form>
      <ul>
        {toDoList.map(toDoList => 
          <li>
            <input type='checkbox'/> {toDoList.id}/{toDoList.text}
            <button>modify</button>
            <button onClick={() => onRemove(toDoList.id)}>delete</button>
          </li>)
          }
      </ul>
    </div>
  );
}

export default App;