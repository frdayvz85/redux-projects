import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import NotFound from './components/NotFound'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Switch>
      <Route path="/" exact component={Products} />
      <Route path="/product/:productId" exact component={ProductDetail} />
      <Route path="*" component={NotFound} />
      </Switch>
    </Router>

  )
}

export default App
