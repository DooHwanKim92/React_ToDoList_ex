
function UnCheckedItem({toDoList}) {


    return(
        <span>
            {toDoList.id} / {toDoList.todo}
        </span>
    )

}

export default UnCheckedItem;