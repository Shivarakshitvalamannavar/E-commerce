// import { USER_ACTION_TYPES } from "./user.types";

// const INITIAL_STATE ={
//     currentUser :null,
//     isLoading :false,
//     error:null,
// }

// export const userReducer = (state =INITIAL_STATE,action) =>{
//     const {type,payload} = action;
//     console.log(action)


//     switch(type){
//         case USER_ACTION_TYPES.SET_CURRENT_USER:
//             return {...state,currentUser: payload};//What's happening is first we are returning the object(state) properties that we dont want to change  and then whatever we are changing  will be overwriting it
//         default:
//             return state
//     }
// }

// IN the belowe code 
//we are using the new types 
import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE ={
    currentUser :null,
    isLoading :false,
    error:null,
}

export const userReducer = (state =INITIAL_STATE,action) =>{
    const {type,payload} = action;
    console.log(action)


    switch(type){
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return {...state,currentUser: payload};//What's happening is first we are returning the object(state) properties that we dont want to change  and then whatever we are changing  will be overwriting it
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return {...state,currentUser:null};
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILED:
        case USER_ACTION_TYPES.SIGN_IN_FAILED:
            return {...state ,error: payload}
        
        default:
        return state
    }
}





