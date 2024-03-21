import './App.css';
import { useCallback, useRef, useState } from 'react';

function App() {

  let textId = useRef(4);

  // todo sample data
  const [toDoList, setToDoList] = useState([
    {id:1,text:"toDo-1",checked:false},
    {id:2,text:"toDo-2",checked:false},
    {id:3,text:"toDo-3",checked:false}
  ]);

  // 추가
  const onInsert = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, {id:textId.current,text: e.target.text.value,checked:false}]);
    textId.current++;
  }

  // 삭제
  const onRemove = (id) => {
    setToDoList(toDoList.filter((toDoList => toDoList.id !== id)))
  }

  // check
  const onChecked = (id) => {
    setToDoList(toDoList.map((toDoList) => {
      return toDoList.id === id ? {...toDoList, checked: !toDoList.checked} : toDoList
    }))
  }

  return (
    <div className="App">
      <nav><h1>React ToDoList</h1></nav>
      <form onSubmit={onInsert}>
        <input name="text" /><button type='submit'>enter</button>
      </form>
      <ul>
        {toDoList.map(toDoList => 
          <li key={toDoList.id}>
            <input type='checkbox' checked={toDoList.checked} onClick = {() => onChecked(toDoList.id)}/> 
            {toDoList.id}/{toDoList.text}
            <button>modify</button>
            <button onClick={() => onRemove(toDoList.id)}>delete</button>
          </li>)
          }
      </ul>
    </div>
  );
}

export default App;