import {Button} from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux"
import { loginauth, logindata } from "../Redux/action";
const Login = () => {
    const [email,setEmail] = useState("");
    const dispatch = useDispatch();
    const login = () => {
    
    dispatch(logindata(setEmail))
    }
    return(
   <div>
       <h3>Login</h3>
       <input  placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
       <input placeholder="password" type="password" /><br /><br/>
       <Button onClick={() => login()}>Login</Button>
   </div>
    )
}
export default Login;