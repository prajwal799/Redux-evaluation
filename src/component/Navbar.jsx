import{ Link} from "react-router-dom";
import "./module.css"
const Navbar = () => {
    return(
    <>
    <div className="navbar">
     <Link to="">Home</Link>
     <Link to="/search">Search</Link>
     <Link to="login">Login</Link>

    </div>
     </>
    )
}
export default Navbar;