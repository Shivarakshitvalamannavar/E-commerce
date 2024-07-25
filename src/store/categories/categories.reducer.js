import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_STATE={
    categoriesMap:{},
    isLoading: false,
    error :null
}

export const categoriesReducer =(state=CATEGORIES_INITIAL_STATE,action={}) =>{
    const {type,payload}=action;

    switch(type){
        // case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
        //     return{... state,categoriesMap:payload}; cOMMENTING SINCE NOW we ary trying some ayschronous things 
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
             return{...state,isLoading:true};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return {...state,categoriesMap:payload,isLoading:false};
        case CATEGORIES_ACTION_TYPES.FETECH_CATEGORIES_FAIL:
            return {...state,isLoading:false};
        default:
            return state
    }
}