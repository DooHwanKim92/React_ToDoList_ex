import ItemList from "./ItemList";


function Items({toDoList, onChecked, onRemove}) {


    
    return (
        <ul>
        {
        toDoList.map(
            toDoList => <ItemList toDoList = {toDoList} onChecked = {onChecked} onRemove = {onRemove} />
            )
          }
      </ul>
    )
}

export default Items;