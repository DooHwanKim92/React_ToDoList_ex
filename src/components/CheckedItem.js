

function CheckedItem({toDoList}) {


    return (

        <del>
            <span>
                {toDoList.id} / {toDoList.todo}
            </span>
        </del>
    )


}

export default CheckedItem;