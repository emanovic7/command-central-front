import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Geolocation from './components/location/geolocation';
import ReverseLocation from './components/location/reverseLocation';
import rootReducer from './reducers/rootReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
      <App />
      <Geolocation />
      <ReverseLocation />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
