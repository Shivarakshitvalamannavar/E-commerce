// import { createAction } from "../../utils/reducer/reducer";

// import { CATEGORIES_ACTION_TYPES } from "./categories.types";
// import { getCateAndDocuments } from "../../utils/firebase/firebase.utils";

// //export const setCategories=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,categoriesArray);//comenting this part since now using async functions 

// export const fetchCategoriesStart=() =>
//     createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

// export const fetchCategoriesSuccess=(categoriesArray)=>
//     createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);

// export const fetchCategoriesFailed=(error) =>
//     createAction(CATEGORIES_ACTION_TYPES.FETECH_CATEGORIES_FAIL,error)

// export const fetchCategoriesAsync =() => async(dispatch) =>{
//     dispatch(fetchCategoriesStart());
//     try{
//         const categoriesArray= await getCateAndDocuments('products')
//         dispatch(fetchCategoriesSuccess(categoriesArray));
//     } catch(error){
//         dispatch(fetchCategoriesFailed(error))
//     }
// }

//Commenting since now we are migrrating into saga

import { createAction } from "../../utils/reducer/reducer";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";


//export const setCategories=(categoriesArray)=>createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,categoriesArray);//comenting this part since now using async functions 

export const fetchCategoriesStart=() =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess=(categoriesArray)=>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,categoriesArray);

export const fetchCategoriesFailed=(error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETECH_CATEGORIES_FAIL,error)

