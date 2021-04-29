import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCtegoryReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
})

export default reducers;