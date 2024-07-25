// import { createContext, useState, useEffect  } from "react";

// import { onAuthStateChangedListener ,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
// //as the acutal vaule we want to accces
// export const UserContext =createContext({

//     currentUser: null,
//     setCurrentUser: () => null,


// })

// export const UserProvider =({children}) =>{
//     const [currentUser,setCurrentUser] =useState(null);
//     const value ={currentUser,setCurrentUser}


//     useEffect(() =>{
//         const unsubscribe = onAuthStateChangedListener((user) =>{
//             if(user)
//             {
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user)
//         })

//         return unsubscribe
//     }, [])

//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
//  } //From next we are using Redux for state management

import { createContext, useState, useEffect ,useReducer  } from "react";

import { onAuthStateChangedListener ,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import {createAction} from'../utils/reducer/reducer'
//as the acutal vaule we want to accces
export const UserContext =createContext({

    currentUser: null,
    setCurrentUser: () => null,
})

export const USER_ACTION_TYPES ={
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE ={
    currentUser :null,
}

const userReducer = (state,action) =>{
    const {type,payload} = action;
    console.log(action)


    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {...state,currentUser: payload};//What's happening is first we are returning the object(state) properties that we dont want to change  and then whatever we are changing  will be overwriting it
        default:
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}



export const UserProvider =({children}) =>{
    const [{currentUser} ,dispatch] =useReducer(userReducer,INITIAL_STATE);
    console.log(currentUser)

    const setCurrentUser = (user) =>
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))


    useEffect(() =>{
        const unsubscribe = onAuthStateChangedListener((user) =>{
            if(user)
            {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    const value ={currentUser,}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}