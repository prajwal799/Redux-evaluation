import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { searchdata } from "../Redux/action";


const Home = () => {
    const [search , setSearch] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(searchdata(search))
    },[search])
    const loginauthdata = useSelector((state) => state.loginauths);
    return loginauthdata ?
     <div>Search name of user
      <input placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)} />
 
    </div> : <Navigate to="/login"></Navigate>
}
export default Home;