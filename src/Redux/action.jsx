import { appComponent } from "./actionType"

export const loginauth =  (payload) => {
    console.log("dkscjs")
    return{
        type : appComponent.LOGIN_AUTH,
        payload
   }
}