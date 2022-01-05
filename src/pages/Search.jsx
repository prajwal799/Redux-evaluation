import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import{ Link, Navigate} from "react-router-dom";
import { github } from "./api";
import React , {useState} from "react"

const Search = () => {
    const loginauthdata = useSelector((state) => state.loginauths);
    const query = useSelector((state) => state.query);
    const data = useSelector((state) => state.data);
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {

      dispatch(github(query,page))
      
     },[query,page])
    

   return loginauthdata ? <div>Serach
   {data?.map((item) => (
       <p key={item.id}> {item.login}</p>
   ))}
  <button onClick={() => setPage(page-1)}>prev</button>
  <button onClick={() => setPage(page+1)}>next</button>
   </div> : <Navigate to="/login"></Navigate>
}
export default Search;