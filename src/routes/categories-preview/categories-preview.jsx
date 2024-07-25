import { Fragment, useContext } from "react"
import { useSelector } from "react-redux"
// import { CategoriesContext } from "../../contexts/categories.context" THis was using normal redux
 import { selectCategoriesMap ,selectCategoriesMapIsLoading} from "../../store/categories/categories.selector" //This is using the redux library
import Spinner from "../../components/spinner/spinner.component"
import CategoryPreview from "../../components/category-preview/category-preview"

import './categories-preview.styles.scss'
const CategoriesPreview = () => {
    // const { categoriesMap } = useContext(CategoriesContext)
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesMapIsLoading)
    return(
        <Fragment>
           { isLoading ?(<Spinner/>):
            (Object.keys(categoriesMap).map(title =>{
                const products =categoriesMap[title]
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            }))
        }
        </Fragment>


    )
}

export default CategoriesPreview