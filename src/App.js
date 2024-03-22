import { useState, useRef } from 'react';
import Header from './components/Header';
import Insert from './components/Insert';
import Items from './components/Items';


function App() {

  const textId = useRef(4);


  const [toDoList, setToDoList] = useState([
    {id:1, text:"ToDo-1", checked:false},
    {id:2, text:"ToDo-2", checked:false},
    {id:3, text:"ToDo-3", checked:false}
  ]);

  const onInsert = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, {id:textId.current, text: e.target.text.value, checked:false}]);
    textId.current++;
  }

  const onRemove = (id) => {
    setToDoList(toDoList.filter((toDoList => toDoList.id !== id)));
  }

  const onChecked = (id) => {
    setToDoList(toDoList.map((toDoList) => {
      return toDoList.id === id ? {...toDoList, checked: !toDoList.checked} : toDoList
    }))
  }

  const onModify = (id) => {
    setToDoList(toDoList.map((toDoList) => {
      return toDoList.id === id ? {...toDoList, text: id.target.modifyText.value} : toDoList
    }))
  }




  return (
    <div className="App">
      <Header header={"To Do List"} />
      <Insert onInsert = {onInsert}/>
      <Items toDoList = {toDoList} onRemove = {onRemove} onChecked = {onChecked} onModify = {onModify}/>
    </div>
  );
}

export default App;