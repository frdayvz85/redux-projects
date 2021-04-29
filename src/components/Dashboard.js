import React from 'react'
import { Row, Col } from "reactstrap"
import CategoryList from './CategoryList';
import ProductList from './ProductList';

const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col xs="3">
                    <CategoryList />
                </Col>
                <Col xs="9">
                    <ProductList />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
