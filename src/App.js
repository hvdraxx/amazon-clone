import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'

function App({history}) {
  return (
    <ConnectedRouter history={history}>
      <Router>
        <React.Fragment>
          <Header />

          <Switch>
            <Route path="/login">
              <h1>Login Page</h1>
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </React.Fragment>
      </Router>
    </ConnectedRouter>
  )
}

export default App

