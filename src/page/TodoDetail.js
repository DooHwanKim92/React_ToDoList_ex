import { useParams } from "react-router-dom";
import { useEffect } from 'react';


function TodoDetail({toDoList}) {

    

    const {id} = useParams();

    const toDoItem = toDoList.find(toDoList => toDoList.id === id);

    
    if (!toDoItem) {

        return (
            <div>
                Can not Find List.
            </div>
        )
    }

    return (
        <>
         할 일 : {toDoItem.todo}
        </>
    )

}

export default TodoDetail;