import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Insert from './components/Insert';
import Items from './components/Items';


function App() {

  const textId = useRef(31);

  const [toDoList, setToDoList] = useState([

  ]);

  useEffect(() => {
    const data = fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(data => setToDoList(data.todos))
    .then(console.log);
  }, [])

  const onInsert = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, {id:textId.current, todo: e.target.text.value, checked:false}]);
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

  const onModify = (e,id) => {
    setToDoList(toDoList.map((toDoList) => {
      return toDoList.id === id ? {...toDoList, text: e.target.modifyText.value} : toDoList
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