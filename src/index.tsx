import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store, { history } from './redux/store'
import App from './App';
import { GlobalStyles } from './index.styled';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyles />
    <App history={history}/>
  </Provider>,
  document.getElementById('root')
);

