import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'
import { connect } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { setUser } from './redux/actions/userActions'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Auth from './components/Auth/Auth'
import { AppProps } from './types'

function App({history, setUser}: AppProps) {

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) setUser(user)
      else setUser({})
    })
  })

  return (
    <ConnectedRouter history={history}>
      <Router>
        <React.Fragment>
          
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>

            <Route path="/cart">
              <Header />
              <Cart />
            </Route>

            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>

        </React.Fragment>
      </Router>
    </ConnectedRouter>
  )
}

export default connect(null, {setUser})(App)

