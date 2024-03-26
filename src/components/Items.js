import ItemList from "./ItemList";

function Items({toDoList, onRemove, onChecked, onModify}) {


    

    return (
        <ul>
            {toDoList.map(
                toDoList => <ItemList toDoList = {toDoList} onRemove = {onRemove} onChecked = {onChecked} onModify = {onModify}/>                
            )}
        </ul>
    )

}

export default Items;