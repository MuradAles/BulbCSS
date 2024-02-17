import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <li>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </li>
    )
}
export default NavBar;