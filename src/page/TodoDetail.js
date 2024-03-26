import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Header from "../components/Header";


function TodoDetail({toDoList}) {

    // TodoList 처럼 useEffect();, useParams(); 로직 구현


    return (

        <Header>
            <div>
                할 일 상세
            </div>
        </Header>
        
    )

}

export default TodoDetail;