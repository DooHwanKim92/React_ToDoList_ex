import { Link } from "react-router-dom";

function Header({header}) {


    return (

        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/todos">Todo</Link>
        </nav>

    )
}


export default Header;