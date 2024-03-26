import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import TodoList from './page/TodoList';
import Header from './components/Header';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {<Header/>}></Route>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/todos' element = {<TodoList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;