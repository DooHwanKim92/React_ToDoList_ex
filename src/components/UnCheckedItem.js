import { Link, Route, Routes } from "react-router-dom";
import TodoDetail from "../page/TodoDetail";


function UnCheckedItem({toDoList}) {



    return (
        <Link to = {`/todos/${toDoList.id}`} element = {<TodoDetail toDoList = {toDoList}/>}>
            {toDoList.id} / {toDoList.todo}
        </Link>
    )
}


// 중간 3차 프로젝트
// OTT 사이트, 추천 알고리즘 구현, 프론트는 그냥 배제하자 이제
// 
// API 활용(공식문서) 숙련도 향상, RESTful API 도??
// + Spring Batch 아직 제대로 활용 안해봄, TossPayments API도 제대로 활용했다고 보기는 어렵고,,,
// 그럼 정산기능을 다시 구현해보는걸 목표로 추가하고,
// 일단 이번주는 자격증 공부에 집중


export default UnCheckedItem;