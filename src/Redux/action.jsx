import { appComponent } from "./actionType"

export const loginauth =  (payload) => {
    return{
        type : appComponent.LOGIN_AUTH,
        payload
    }
}
export const logindata = (payload) => {
    return{
        type : appComponent.LOGIN_DATA,
        payload
    }
}
export const searchdata = (payload) => {
   
    return{
        type : appComponent.SEARCH_DATA,
        payload 
    }
}

export const gitrequest = (payload) => {
    return{
        type : appComponent.GIT_REQUEST,
        payload
    }
}
export const gitsucces = (payload) => {
    console.log(payload,"payload")
    return{
        type : appComponent.GIT_SUCCESS,
        payload
    }
}
export const gitFailure = (payload) => {
    return{
        type : appComponent.GIT_FAILURE,
        payload
    }
}