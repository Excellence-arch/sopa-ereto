import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import './style.css';
import allReducers from './Reducers/allReducers';
// import { disableReactDevTools } from '@fvilers/disable-react-devtools';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// if (process.env.NODE_ENV == 'production') {
// disableReactDevTools();
// }

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
