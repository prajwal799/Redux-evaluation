import { appComponent } from "./actionType"

const initState = {
    loginauths : false,
    query : "",
    isLoading : false,
    isError : false,
    data : []
}

export const reduce = (state = initState , {payload,type}) => {
    switch(type){
        case appComponent.GIT_REQUEST : {
            return{
                ...state,
                isLoading : true
            }
        }
        case appComponent.GIT_SUCCESS : {
            console.log('sd,mn,mdsncnsd',payload)
            return{
                ...state,
                data : payload,
                isLoading : false
            }
        }
        case appComponent.GIT_REQUEST : {
            return{
                ...state,
                isLoading : true,
                isError : true
            }
        }
        case appComponent.SEARCH_DATA : {
            return{
                ...state,
                query : payload
            }
        }
        case appComponent.LOGIN_DATA :{
            console.log("cdkjhxhkx")
            return{
                loginauths: true
            }
        }
     case appComponent.LOGIN_AUTH : {
         console.log("djsclkhdshgjfsdhjfj")
       return {
           ...state,
           loginauths : true
       }
     } 
     default : 
     return state
        
    }
}