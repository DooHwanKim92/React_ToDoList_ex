import CheckedItem from "./CheckedItem";
import UnCheckedItem from "./UnCheckedItem";


function ItemList({toDoList, onRemove, onChecked, onModify}) {



    return (
        <li>
            <input type="checkbox" checked = {toDoList.checked} onClick={() => onChecked(toDoList.id)}></input>
              {toDoList.checked ? <CheckedItem toDoList={toDoList}/> : <UnCheckedItem toDoList={toDoList}/>}
            <button>modify</button>
            <button onClick={() => onRemove(toDoList.id)}>remove</button>
        </li>
    )
}



export default ItemList;