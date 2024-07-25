import { createSelector } from "reselect"
import { createAction } from "../../utils/reducer/reducer"

const selectCategoryReducer = (state)=>state.categories

export  const selectCategoriesMap=(state) => state.categories.categoriesMap


export const selectCategoriesMapIsLoading =createSelector(
    [selectCategoryReducer],
    (categoriesSlice)=>categoriesSlice.isLoading
)