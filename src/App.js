import './App.css';
import { useCallback, useRef, useState } from 'react';
import Nav from './components/Nav';
import Insert from './components/Insert';
import Items from './components/Items';

function App() {

  let textId = useRef(4);



  // todo sample data [state]
  const [toDoList, setToDoList] = useState([
    {id:1,text:"toDo-1",checked:false},
    {id:2,text:"toDo-2",checked:false},
    {id:3,text:"toDo-3",checked:false}
  ]);


  console.log(toDoList);


  // 추가 메서드
  const onInsert = (e) => {
    e.preventDefault();
    setToDoList([...toDoList, {id:textId.current, text: e.target.text.value, checked:false}]);
    textId.current++;
  }

  // 삭제 메서드
  const onRemove = (id) => {
    setToDoList(toDoList.filter((toDoList => toDoList.id !== id)))
  }

  // check 메서드
  const onChecked = (id) => {
    setToDoList(toDoList.map((toDoList) => {
      return toDoList.id === id ? {...toDoList, checked: !toDoList.checked} : toDoList
    }))
  }

  return (
    <div className="App">
      {/* props => component간 통신할 때 사용 */}
      <Nav headerName={"하이"}></Nav>
        <Insert onInsert = {onInsert} />
        <Items toDoList = {toDoList} onChecked = {onChecked} onRemove = {onRemove}/>
    </div>
  );
}

export default App;