import {Button} from "@mui/material"
import { useDispatch } from "react-redux"
import { loginauth } from "../Redux/action";
const Login = () => {
    const dispatch = useDispatch();
    const login = () => {
       
       dispatch(loginauth)
    }
    return(
   <div>
       <h3>Login</h3>
       <input  /><br />
       <input /><br /><br/>
       <Button onClick={login}>Login</Button>
   </div>
    )
}
export default Login;