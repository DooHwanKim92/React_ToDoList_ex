
function ItemList({toDoList, onChecked, onRemove}) {




    return (
        <li key={toDoList.id}>
            <input type='checkbox' checked={toDoList.checked} onClick = {() => onChecked(toDoList.id)}/> 
              {toDoList.id}/{toDoList.text}
            <button>modify</button>
            <button onClick={() => onRemove(toDoList.id)}>delete</button>
          </li>
    )
}

export default ItemList;