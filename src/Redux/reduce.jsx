import { appComponent } from "./actionType"

const initState = {
    loginauths : false
}

export const reduce = (state = initState , {payload,type}) => {
   console.log('sd,mn,mdsncnsd')
    switch(type){
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