// import { Route,Routes } from 'react-router-dom'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
// import { getCateAndDocuments } from '../../utils/firebase/firebase.utils'
// import {setCategories} from '../../store/categories/categories.action'
// import { fetchCategoriesAsync } from '../../store/categories/categories.action'
// import CategoriesPreview from '../categories-preview/categories-preview'
// import Category from '../category/category.component'
// import './shop.styles.scss'
// const Shop = () => {
//     const dispatch =useDispatch();
//     useEffect (()=>{
//         // // const getCategoriesMap = async () => {
//         //     //const categoriesMap = await getCateAndDocuments('products');
//         //     //console.log(categoriesMap)
//         //     // dispatch(setCategories(categoriesMap));//commneting since now trying with async type
//         //
//         // }
//         dispatch(fetchCategoriesAsync());
//         // getCategoriesMap()
//     },[])

//     return(
//         <Routes>
//             <Route index element={<CategoriesPreview/>}>
//             </Route>
//             <Route path=":category" element={<Category/>}>
//             </Route>
//         </Routes>
//     )
// }

// export default Shop

//Commented the above code since now we are trying
//Saga library

import { Route,Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCateAndDocuments } from '../../utils/firebase/firebase.utils'
import {setCategories} from '../../store/categories/categories.action'
import { fetchCategoriesStart } from '../../store/categories/categories.action'
import CategoriesPreview from '../categories-preview/categories-preview'
import Category from '../category/category.component'
import './shop.styles.scss'
const Shop = () => {
    const dispatch =useDispatch();
    useEffect (()=>{
        // // const getCategoriesMap = async () => {
        //     //const categoriesMap = await getCateAndDocuments('products');
        //     //console.log(categoriesMap)
        //     // dispatch(setCategories(categoriesMap));//commneting since now trying with async type
        //
        // }
        dispatch(fetchCategoriesStart());
        // getCategoriesMap()
    },[])

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}>
            </Route>
            <Route path=":category" element={<Category/>}>
            </Route>
        </Routes>
    )
}

export default Shop