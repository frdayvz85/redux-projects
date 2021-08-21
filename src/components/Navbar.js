import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = ({isAuth, login, logout}) => {
    return (
        <div className="navbar">
            <div className="logo"><Link to="/">Redux</Link></div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/accounts">Accounts</Link>
                </li>
                <li>
                    <Link to="/card">Card</Link>
                </li>
                <li>
                    <Link to="/price">Price</Link>
                </li>
            </ul>
            <div className="hamburger">
               { !isAuth ? <button onClick={login}>Login</button>:  <button onClick={logout}>Logout</button>}
            </div>
        </div>
    )
}

export default Navbar
