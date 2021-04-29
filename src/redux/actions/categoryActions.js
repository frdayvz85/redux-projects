import * as actionTypes from "./actionTypes";


export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
}

export function getCategoriesSuccess(categories) {
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}

export function getCategories() {
    return function (dispatch) {
        let url = 'http://localhost:3000/categories';
        return fetch(url)
            .then(response => response.json())
            .then(result => dispatch(getCategoriesSuccess(result)))
            // console.log(result)
    }
}

// export const getCategories = async (dispatch) => {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json()
//         const result = dispatch(getCategoriesSuccess(result))
//         console.log(result)
// }
