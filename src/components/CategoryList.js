import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as categoryActions from "../redux/actions/categoryActions";
import * as productActions from "../redux/actions/productActions";


const CategoryList = (props) => {
    useEffect(() => {
        props.actions.getCategories()
    }, [])

    const selectCategory = (category) => {
        props.actions.changeCategory(category)
        props.actions.getProducts(category.id)
    }
    return (
        <div>
            <h3>Categories</h3>
            <ListGroup>
                {props.categories.map(category => (
                    <ListGroupItem
                        active={category.id === props.currentCategory.id}
                        onClick={() => selectCategory(category)}
                        key={category.id}
                    >
                        {category.categoryName}
                    </ListGroupItem>
                ))}

            </ListGroup>
            {/* <h5>Seçili kategori:{props.currentCategory.name}</h5> */}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)
