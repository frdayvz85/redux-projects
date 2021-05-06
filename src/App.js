import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from "./data.json";

const App = () => {

  const [state, setState] = useState({
    products: data.products,
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    size: "",
    sort: "",
    category: "",
  })

  useEffect(() => {

  }, []);


  const addToCart = (product) => {
    const cartItems = state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  };


  const removeFromCart = (product) => {
    const cartItems = state.cartItems.slice();
    setState({
      cartItems: cartItems.filter((x) => x.id !== product.id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x.id !== product.id))
    );
  }
  
  const filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setState({ size: e.target.value, products: data.products })
    }
    setState({
      size: e.target.value,
      products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
    })
  }

  const categoryProducts = (e) => {
    console.log(e.target.value)
    if (e.target.value === "") {
      setState({ category: e.target.value, products: data.products })
    }
    setState({
      category: e.target.value,
      products: data.products.filter(product => product.categories.indexOf(e.target.value) >= 0)
    })

  }

  const sortProducts = (e) => {
    // impl
    const sort = e.target.value;
    console.log(e.target.value);
    setState((state) => ({
      sort: sort,
      products: state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
              ? a.price < b.price
                ? 1
                : -1
              : a.id < b.id
                ? 1
                : -1
        ),
    }));
  };



  return (
    <div className="container">
      <header>
        <div className="speacial-container">
          <a href="/">E-shop</a>
        </div>
      </header>
      <main>
        <div className="speacial-container">
          <div className="content">
            <div className="main">
              <Filter
                count={state.products.length}
                size={state.size}
                sort={state.sort}
                category={state.category}
                filterProducts={filterProducts}
                sortProducts={sortProducts}
                categoryProducts={categoryProducts}
              />
              <Products
                products={state.products}
                addToCart={addToCart}
              />
            </div>
            <div className="sidebar">
              <Cart
                cartItems={state.cartItems}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>
        </div>
      </main>
      <footer>All right reserved.</footer>
    </div>
  )
}

export default App
