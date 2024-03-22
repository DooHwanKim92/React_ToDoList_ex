
function UnCheckedItem({toDoList}) {


    return(
        <span>
            {toDoList.id} / {toDoList.text}
        </span>
    )

}

export default UnCheckedItem;