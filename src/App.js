import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import './App.css'
import Accounts from './pages/Accounts';
import Home from './pages/Home';
import Card from './pages/Card';
import ProtectedRoute from './main/ProtectedRoute';
import useAuth from './hooks/useAuth';

const App = () => {
  const {isAuth, login, logout} = useAuth(false) //custom hooks
  return (
    <Router>
      <Navbar isAuth={isAuth} login={login} logout={logout}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/card" component={Card} />
        <ProtectedRoute path="/accounts" component={Accounts} auth={isAuth} />
      </Switch>
    </Router>
  )
}

export default App
