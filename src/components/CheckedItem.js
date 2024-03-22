

function CheckedItem({toDoList}) {


    return (

        <del>
            {toDoList.id} / {toDoList.text}
        </del>
    )


}

export default CheckedItem;