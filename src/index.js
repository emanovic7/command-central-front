import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Geolocation from './components/geolocation';
import rootReducer from './reducers/rootReducer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
      <App />
      <Geolocation />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
