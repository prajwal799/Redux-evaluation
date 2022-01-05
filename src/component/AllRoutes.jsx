import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Search from "../pages/Search"

const AllRoutes = () => {
     return(
         <>
         <Routes>
             <Route path="" element={<Home />}></Route>
             <Route path="/search" element={<Search />}></Route>
             <Route path="/login" element={<Login />}></Route>
         </Routes>
         </>
     )
}
export default AllRoutes