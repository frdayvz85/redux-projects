import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from "react-router-dom"

const Navi = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand><Link to={"/"}>E-shop</Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                      <CartSummary />
                    </Nav>
                    <NavbarText>Farid Eyvazov</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Navi
