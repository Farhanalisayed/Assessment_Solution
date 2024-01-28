import {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import LoginSignup from './components/LoginSignup'
import AllProductsSection from './components/AllProductsSection'
import ProductItemDetails from './components/ProductItemDetails'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  addCartItem = product => {
    const {cartList} = this.state
    const theProduct = cartList.find(each => each.id === product.id)
    if (theProduct !== undefined) {
      const index = cartList.indexOf(theProduct)
      let theQuantity = cartList[index].quantity
      theQuantity += 1
      const updatedProd = {...cartList[index], quantity: theQuantity}
      this.setState(prevState => ({
        cartList: prevState.cartList.map(each => {
          if (product.id === each.id) {
            return updatedProd
          }
          return each
        }),
      }))
    } else {
      this.setState(prevState => ({cartList: [...prevState.cartList, product]}))
    }
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/login" component={LoginSignup} />
            <Route exact path="/register" component={LoginSignup} />
            <ProtectedRoute
              exact
              path="/products"
              component={AllProductsSection}
            />
            <ProtectedRoute
              exact
              path="/forgotPassword"
              component={ForgotPassword}
            />
            <ProtectedRoute
              exact
              path="/resetPassword"
              component={ResetPassword}
            />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
            />
          </Routes>
        </Router>
      </CartContext.Provider>
    )
  }
}

export default App
