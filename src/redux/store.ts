import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { rootReducer } from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

export default createStore(
  rootReducer(history), 
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
)