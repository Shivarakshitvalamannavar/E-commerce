import { createContext, useState, useEffect  } from "react";


import { getCateAndDocuments } from "../utils/firebase/firebase.utils.js";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";



// export const ProductContext =
//  createContext({
//     products : [],
    
// })

export const CategoriesContext = createContext({
    categoriesMap : [],
})


export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect (()=>{
        const getCategoriesMap =async () => {
            const categoryMap = await getCateAndDocuments();
            console.log(categoryMap)
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap()
    },[])

    // useEffect(() =>{
    //     addCollectionAndDocuments('products', SHOP_DATA)
    // },[])
    // This here adds the collection under the name products

    const value ={categoriesMap}

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}