import { gitFailure, gitrequest, gitsucces } from "../Redux/action"

export const github = (query,setPage) => (dispatch) =>  {
    console.log(setPage,"page");
     dispatch(gitrequest());
    return fetch(`https://api.github.com/search/users?q=${query}&per_page=5&page=${setPage}`)
      .then((res) => res.json())
    .then((res) => {
        dispatch(gitsucces(res.items))
        return res
    })
    .catch((err) => {
        dispatch(gitFailure)
    })

}