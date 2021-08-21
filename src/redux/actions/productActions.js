import * as types from './types'

export const setProducts = (products) => {
    return {
        type:types.SET_PRODUCTS,
        payload:products
    }
}

export const selectProduct = (product) => {
    return {
        type:types.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct = () => {
    return {
        type:types.REMOVE_SELECTED_PRODUCT,
    }
}